<?php

namespace Drupal\mailhogger\State;

use Drupal\Core\KeyValueStore\DatabaseStorage;
use Drupal\Component\Serialization\SerializationInterface;
use Drupal\Core\Database\Connection;

/**
 *
 */
class Settings extends DatabaseStorage {

  /**
   * @param \Drupal\Component\Serialization\SerializationInterface $serializer
   * @param \Drupal\Core\Database\Connection $connection
   */
  public function __construct(SerializationInterface $serializer, Connection $connection) {
    parent::__construct('mailhogger.settings', $serializer, $connection);
  }

  /**
   *
   */
  public function getMailHogUrl() {
    return $this->get('mailhog_url', 'http://127.0.0.1:8025');
  }

  /**
   *
   */
  public function getSenderEmail() {
    $email = $this->get('sender_email');
    if (empty($email)) {
      $email = $this->getDefaultSenderEmail()[0];
    }

    return $email;
  }

  /**
   *
   */
  public function getOutgoingServers() {
    $servers = $this->get('outgoing_servers', []);

    if (!isset($servers['default'])) {
      $servers['default'] = [
        'name' => '',
        'host' => '',
        'port' => '',
        'email' => '',
        'username' => '',
        'password' => '',
        'mechanism' => '',
      ];
    }

    return $servers;
  }

  /**
   *
   */
  public function getDefaultSenderEmail() {
    $email = \Drupal::config('smtp.settings')->get('smtp_from');
    if (!empty($email)) {
      return [$email, 'smtp setting'];
    }

    return [\Drupal::config('system.site')->get('mail'), 'system setting'];
  }

}
