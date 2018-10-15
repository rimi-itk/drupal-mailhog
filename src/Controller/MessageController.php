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
   *
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('mailhogger.mailhog_client'));
  }

  private $client;

  /**
   *
   */
  public function __construct(MailHogClient $client) {
    $this->client = $client;
  }

  /**
   * {@inheritdoc}
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
   *
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
   *
   */
  public function deleteAction(Request $request, $id) {
    header('Content-type: text/plain'); echo var_export(NULL, TRUE); die(__FILE__ . ':' . __LINE__ . ':' . __METHOD__);
  }

  /**
   *
   */
  public function releaseAction($id, $server) {
    header('Content-type: text/plain'); echo var_export(func_get_args(), TRUE); die(__FILE__ . ':' . __LINE__ . ':' . __METHOD__);
  }

}
