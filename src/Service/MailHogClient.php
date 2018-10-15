<?php

namespace Drupal\mailhogger\Service;

use Drupal\mailhogger\State\Settings;
use GuzzleHttp\Client;

/**
 * MailHog client (api wrapper).
 */
class MailHogClient {
  /**
   * Settings.
   *
   * @var \Drupal\mailhogger\State\Settings
   */
  protected $settings;

  /**
   * The Guzzle client.
   *
   * @var \GuzzleHttp\Client
   */
  protected $client;

  /**
   * {@inheritdoc}
   */
  public function __construct(Settings $settings, Client $client) {
    $this->settings = $settings;
    $this->client = $client;
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
    $this->client->delete($url);
  }

  /**
   * Release a message.
   */
  public function releaseMessage($id) {
    $servers = $this->getOutgoingServers();
    if (empty($servers)) {
      throw new \Exception('No outgoing servers defined.');
    }
    $server = reset($servers);

    $this->post('api/v1/messages/{id}/release', ['id' => $id], $server);
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
    $request = $this->client->get($url);

    return json_decode($request->getBody(), TRUE);
  }

  /**
   * Post request.
   */
  private function post($path, array $query, array $data) {
    $url = $this->buildUrl($path, $query);
    $request = $this->client->post($url, [
      'json' => $data,
    ]);

    return json_decode($request->getBody(), TRUE);
  }

}
