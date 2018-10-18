<?php

namespace Drupal\mailhog\Service;

use Drupal\mailhog\State\Settings;

/**
 * MailHog client (api wrapper).
 */
class MailHogClient {
  /**
   * Settings.
   *
   * @var \Drupal\mailhog\State\Settings
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
  public static function create() {
    return new static(Settings::create());
  }

  /**
   * Get messages.
   */
  public function getMessages() {
    $messages = $this->get('api/v2/search', [
      'kind' => 'from',
      'query' => $this->settings->getSenderEmail(),
    ]);
    $items = &$messages['items'];
    array_map([$this, 'processMessage'], $items);

    return $messages;
  }

  /**
   * Get message.
   */
  public function getMessage($id) {
    $message = $this->get('api/v1/messages/{id}', ['id' => $id]);

    return $this->processMessage($message);
  }

  /**
   * Delete a message.
   */
  public function deleteMessage($id) {
    $url = $this->buildUrl('api/v1/messages/{id}', ['id' => $id]);
    drupal_http_request($url, [
      'method' => 'DELETE',
    ]);
  }

  /**
   * Release a message.
   */
  public function releaseMessage($id, $email) {
    $servers = $this->getOutgoingServers();
    if (empty($servers)) {
      throw new \Exception('No outgoing servers defined.');
    }
    $server = reset($servers);

    $this->post('api/v1/messages/{id}/release', ['id' => $id], [
      'name' => $server['Name'],
      'email' => $email,
    ]);
  }

  /**
   * Get outgoing servers.
   */
  private function getOutgoingServers() {
    return $this->get('api/v2/outgoing-smtp');
  }

  /**
   * Process message.
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
    ksort($bodies);
    $message['Bodies'] = $bodies;

    return $message;
  }

  /**
   * Build a url.
   */
  private function buildUrl($path, array $parameters = []) {
    $baseUrl = rtrim($this->settings->getMailHogUrl(), '/') . '/';
    $url = $baseUrl . $path;
    $url = preg_replace_callback('/\{(?P<key>[^\}]+)\}/', function ($matches) use (&$parameters) {
      $key = $matches['key'];
      $value = $parameters[$key] ?? $key;
      unset($parameters[$key]);

      return $value;
    }, $url);

    $url .= '?' . http_build_query($parameters);

    return $url;
  }

  /**
   * Get request.
   */
  private function get($path, array $query = []) {
    $url = $this->buildUrl($path, $query);
    $response = drupal_http_request($url);

    return json_decode($response->data, TRUE);
  }

  /**
   * Post request.
   */
  private function post($path, array $query, array $data) {
    $url = $this->buildUrl($path, $query);
    $response = drupal_http_request($url, [
      'method' => 'POST',
      'data' => json_encode($data),
    ]);

    return json_decode($response->data, TRUE);
  }

}
