<?php

namespace Drupal\mailhogger\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\mailhogger\Service\MailHogClient;
use Symfony\Component\HttpFoundation\Request;

/**
 * An example controller.
 */
class MessageController extends ControllerBase {

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('mailhogger.mailhog_client'));
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
        'library' => ['mailhogger/mailhogger'],
      ],
      '#cache' => ['max-age' => 0],
    ];
  }

  /**
   * Single message.
   */
  public function getAction(Request $request, $id) {
    $method = $request->get('_method', $request->getMethod());
    if ('DELETE' === $method) {
      return $this->deleteAction($request, $id);
    }

    $message = $this->client->getMessage($id);

    return [
      '#theme' => 'mail_message_show',
      '#message' => $message,
      '#attached' => [
        'library' => ['mailhogger/mailhogger'],
      ],
      '#cache' => ['max-age' => 0],
    ];
  }

  /**
   * Delete action.
   */
  public function deleteAction(Request $request, $id) {
    try {
      $this->client->deleteMessage($id);
      $this->messenger()->addStatus($this->t('Mail message deleted'));
    }
    catch (\Exception $exception) {
      $this->messenger()->addError($this->t('Error deleting mail message: @message', ['@message' => $exception->getMessage()]));
    }

    return $this->cgetAction($request, $id);
  }

  /**
   * Release action.
   */
  public function releaseAction(Request $request, $id) {
    try {
      $email = $request->get('email');
      $this->client->releaseMessage($id, $email);
      $this->messenger()->addStatus($this->t('Mail message released to %email.', ['%email' => $email]));
    }
    catch (\Exception $exception) {
      $this->messenger()->addError($this->t('Error releasing mail message: @message', ['@message' => $exception->getMessage()]));
    }

    return $this->redirect('mailhogger.message_show', ['id' => $id]);
  }

}
