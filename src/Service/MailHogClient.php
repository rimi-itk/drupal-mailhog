<?php

namespace Drupal\mailhogger\Service;

use Drupal\mailhogger\State\Settings;

/**
 *
 */
class MailHogClient {
  /**
   * Settings.
   *
   * @var \Drupal\mailhogger\State\Settings
   */
  protected $settings;

  /**
   * {@inheritdoc}
   */
  public function __construct(Settings $settings) {
    $this->settings = $settings;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('mailhogger.settings'));
  }

  /**
   * Get messages.
   */
  public function getMessages() {
    $messages = $this->get('api/v2/search', [
      'kind' => 'from',
      'query' => $this->settings->getSenderEmail(),
    ]);
    array_map([$this, 'processMessage'], $messages['items']);

    return $messages;
  }

  /**
   * Get message.
   */
  public function getMessage($id) {
    $message = $this->get('api/v1/messages/' . $id);

    return $this->processMessage($message);
  }

  /**
   *
   */
  private function processMessage(&$message) {
    $bodies = [];
    $parts = $message['MIME']['Parts'] ?: [$message['Content']];
    foreach ($parts as $part) {
      if (isset($part['Headers']['Content-Type'][0])) {
        $type = preg_replace('/;.*/', '', $part['Headers']['Content-Type'][0]);
        $bodies[$type] = $part;
      }
    }

    // Make "text/html" come before "text/plain".
    ksort($bodies);
    $message['Bodies'] = $bodies;

    return $message;
  }

  /**
   *
   */
  private function get($path, array $query = []) {
    $baseUrl = rtrim($this->settings->getMailHogUrl(), '/') . '/';
    $url = $baseUrl . $path;
    if ($query) {
      $url .= '?' . http_build_query($query);
    }

    $client = \Drupal::httpClient();
    $request = $client->get($url);

    return json_decode($request->getBody(), TRUE);
  }

}
