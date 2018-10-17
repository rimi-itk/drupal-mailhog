<?php

namespace Drupal\mailhogger\Controller;

use Drupal\mailhogger\Service\MailHogClient;

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
   * @var \Drupal\mailhogger\Service\MailHogClient
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

    return [
      '#theme' => 'mail_message_list',
      '#messages' => $messages,
      '#attached' => [
        'library' => [['mailhogger', 'mailhogger']],
      ],
      '#cache' => ['max-age' => 0],
    ];
  }

  /**
   * Single message.
   */
  public function getAction($id) {
    $message = $this->client->getMessage($id);

    return [
      '#theme' => 'mail_message_show',
      '#message' => $message,
      '#attached' => [
        'library' => [['mailhogger', 'mailhogger']],
      ],
      '#cache' => ['max-age' => 0],
    ];
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

    return drupal_goto(mailhogger_path('mailhogger.message_show', ['id' => $id]));
  }

  /**
   * Mime part download action.
   */
  public function mimePartDownloadAction($id, $partIndex) {
    $message = $this->client->getMessage($id);
    if (!isset($message['MIME']['Parts'][$partIndex])) {
      throw new \Exception(__METHOD__);
    }

    $part = $message['MIME']['Parts'][$partIndex];
    $filename = $id . '-part-' . $partIndex;
    foreach ($part['Headers'] as $name => $values) {
      header($name . ': ' . implode(',', $values));
    }
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    echo $part['Body'];
    exit;
  }

}
