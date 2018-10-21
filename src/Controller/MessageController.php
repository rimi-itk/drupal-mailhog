<?php

namespace Drupal\mailhog\Controller;

use Drupal\mailhog\Service\MailHogClient;

/**
 * Message controller.
 */
class MessageController {

  /**
   * {@inheritdoc}
   */
  public static function create() {
    return new static(MailHogClient::create());
  }

  /**
   * The MailHog client.
   *
   * @var \Drupal\mailhog\Service\MailHogClient
   */
  private $client;

  /**
   * {@inheritdoc}
   */
  public function __construct(MailHogClient $client) {
    $this->client = $client;
  }

  /**
   * List of messages.
   */
  public function cgetAction() {
    $messages = $this->client->getMessages();

    $header = [
      t('From'),
      t('To'),
      t('Subject'),
      t('Date'),
      t('Actions'),
    ];

    $rows = [];
    foreach ($messages as $message) {
      $rows[] = [
        $message->from,
        implode(', ', $message->to),
        $message->subject,
        $message->date->format(\DateTime::ATOM),
        l(t('Show'), mailhog_path('mailhog.message_show', ['id' => $message->id])),
      ];
    }
    $table = [
      '#markup' => theme('table', [
        'header' => $header,
        'rows' => $rows,
        'empty' => t('No mail messages'),
        'attributes' => [
          'class' => ['mail-message-list'],
        ],
      ]),
    ];

    return [
      'table' => $table,
      '#attached' => [
        'library' => [['mailhog', 'mailhog']],
      ],
      '#cache' => ['max-age' => 0],
    ];
  }

  /**
   * Single message.
   */
  public function getAction($id) {
    $message = $this->client->getMessage($id);

    $build['headers'] = [
      '#markup' => theme('table', [
        'rows' => [
          [
            ['data' => t('From'), 'header' => TRUE],
            $message->from,
          ],
          [
            ['data' => t('To'), 'header' => TRUE],
            implode(', ', array_map(function ($to) use ($message) {
              return implode(' ', [
                '<form class="form-inline" method="post" action="' . mailhog_path('mailhog.message_release', ['id' => $message->id]) . '">',
                $to,
                '<button class="button mail-recipient" type="submit" name="email" value="' . $to . '" title="' . t('Release mail message to @to', ['@to' => $to]) . '">' . t('Send as email') . '</button>',
                '</form>',
              ]);
            }, $message->to)),
                    ],
          [
            ['data' => t('Subject'), 'header' => TRUE],
            $message->subject,
          ],
          [
            ['data' => t('Date'), 'header' => TRUE],
            $message->date->format(\DateTime::ATOM),
          ],
        ],
      ]),
    ];

    $build['content'] = [
      '#type' => 'vertical_tabs',
      '#title' => t('Content'),
    ];

    if ($part = $message->getHtmlPart()) {
      $build['content']['html'] = [
        '#type' => 'fieldset',
        '#title' => t('HTML'),
        '#group' => 'content',
        'body' => [
          '#markup' => $part->body,
        ],
      ];
    }

    if ($part = $message->getTextPart()) {
      $build['content']['plain_text'] = [
        '#type' => 'fieldset',
        '#title' => t('Plain text'),
        '#group' => 'content',
        'body' => [
          '#markup' => htmlspecialchars($part->body),
          '#prefix' => '<pre>',
          '#suffix' => '</pre>',
        ],
      ];
    }

    $build['content']['source'] = [
      '#type' => 'fieldset',
      '#title' => t('Source'),
      '#group' => 'content',
      'body' => [
        '#markup' => htmlspecialchars($message->source),
        '#prefix' => '<pre>',
        '#suffix' => '</pre>',
      ],
    ];

    $build['content']['mime'] = [
      '#type' => 'fieldset',
      '#title' => t('MIME'),
      '#group' => 'content',
    ];

    foreach ($message->parts as $index => $part) {
      $body = [];
      $download_url = mailhog_path('mailhog.message_part_download', ['id' => $message->id, 'part' => $index]);
      $body['download'] = [
        '#markup' => l(t('Download'), $download_url, [
          'attributes' => ['class' => 'button'],
        ]),
      ];
      $body['info'] = [
        '#markup' => $part->contentType . ' (' . $part->size . ' bytes)',
      ];

      $build['content']['mime'][$part->type] = [
        '#type' => 'container',
        '#attributes' => [
          'class' => 'form-item',
        ],
        // '#title' => $part->type,
        // '#group' => 'content',.
        'body' => $body,
      ];
    }

    $build['actions'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => 'message-actions',
      ],
      'back_to_list' => [
        '#markup' => l(t('Back to the list'), mailhog_path('mailhog.message_list')),
      ],
      'delete' => [
        '#prefix' => '<form class="form-inline" method="post" action="' . mailhog_path('mailhog.message_delete', ['id' => $message->id]) . '">',
        '#markup' => '<button class="button" type="submit" name="_method" value="DELETE">' . t('Delete mail message') . '</button>',
        '#suffix' => '</form>',
      ],
      'release' => [
        '#prefix' => '<form class="form-inline" method="post" action="' . mailhog_path('mailhog.message_release', ['id' => $message->id]) . '">',
        '#markup' => '<input class="form-email" type="email" name="email" placeholder="Email address" required/>'
        . '<button class="button" type="submit" name="action" value="release">' . t('Release mail message') . '</button>',
        '#suffix' => '</form>',
      ],
    ];

    $build += [
      '#attached' => [
        'library' => [['mailhog', 'mailhog']],
      ],
      '#cache' => ['max-age' => 0],
    ];

    return $build;
  }

  /**
   * Delete action.
   */
  public function deleteAction($id) {
    try {
      $this->client->deleteMessage($id);
      drupal_set_message(t('Mail message deleted'));
    }
    catch (\Exception $exception) {
      drupal_set_message(t('Error deleting mail message: @message', ['@message' => $exception->getMessage()]), 'error');
    }

    return $this->cgetAction();
  }

  /**
   * Release action.
   */
  public function releaseAction($id) {
    try {
      $email = isset($_POST['email']) ? $_POST['email'] : NULL;
      $this->client->releaseMessage($id, $email);
      drupal_set_message(t('Mail message released to %email.', ['%email' => $email]));
    }
    catch (\Exception $exception) {
      drupal_set_message(t('Error releasing mail message: @message', ['@message' => $exception->getMessage()]), 'error');
    }

    return drupal_goto(mailhog_path('mailhog.message_show', ['id' => $id]));
  }

  /**
   * Mime part download action.
   */
  public function mimePartDownloadAction($id, $index) {
    $message = $this->client->getMessage($id);
    if (!isset($message->parts[$index])) {
      throw new \Exception(__METHOD__);
    }

    $part = $message->parts[$index];
    foreach ($part->headers as $name => $value) {
      header($name . ': ' . $value);
    }
    if ($part->isText()) {
      $filename = $id . '-part-' . $index;
      header('content-disposition: attachment; filename="' . $filename . '"');
    }
    echo $part->body;
    exit;
  }

}
