<?php

namespace Drupal\mailhogger\State;

use Drupal\Core\KeyValueStore\DatabaseStorage;
use Drupal\Component\Serialization\SerializationInterface;
use Drupal\Core\Database\Connection;

/**
 * Mailhogger settings.
 */
class Settings extends DatabaseStorage {

  /**
   * Constructor.
   */
  public function __construct(SerializationInterface $serializer, Connection $connection) {
    parent::__construct('mailhogger.settings', $serializer, $connection);
  }

  /**
   * Get MailHog url.
   */
  public function getMailHogUrl() {
    return $this->get('mailhog_url', 'http://127.0.0.1:8025');
  }

  /**
   * Get sender email.
   */
  public function getSenderEmail() {
    $email = $this->get('sender_email');
    if (empty($email)) {
      $email = $this->getDefaultSenderEmail()[0];
    }

    return $email;
  }

  /**
   * Get default sender email.
   *
   * @return string[]
   *   2-tuple (email, source).
   */
  public function getDefaultSenderEmail() {
    $email = \Drupal::config('smtp.settings')->get('smtp_from');
    if (!empty($email)) {
      return [$email, 'smtp setting'];
    }

    return [\Drupal::config('system.site')->get('mail'), 'system setting'];
  }

}
