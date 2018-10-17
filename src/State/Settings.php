<?php

namespace Drupal\mailhogger\State;

/**
 * Mailhogger settings.
 */
class Settings {

  /**
   * Create an instance of Settings.
   */
  public static function create() {
    return new static();
  }

  /**
   * Constructor.
   */
  public function __construct() {
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
    if (module_exists('smtp')) {
      $email = variable_get('smtp_from');
      if (!empty($email)) {
        return [$email, 'smtp setting'];
      }
    }

    return [variable_get('site_mail'), 'system setting'];
  }

  /**
   * Get named value.
   */
  private function get($name, $default_value = NULL) {
    return variable_get('mailhogger_' . $name, $default_value);
  }

}
