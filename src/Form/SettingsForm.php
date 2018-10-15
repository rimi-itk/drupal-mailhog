<?php

namespace Drupal\mailhogger\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\mailhogger\State\Settings;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class SettingsForm.
 *
 * @package Drupal\mailhogger\Form
 * @ingroup mailhogger
 */
class SettingsForm extends FormBase {
  private $settings;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('mailhogger.settings')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function __construct(Settings $settings) {
    $this->settings = $settings;
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'mailhogger_settings';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    [$defaultSenderEmail, $defaultSenderEmailSource] = $this->settings->getDefaultSenderEmail();

    $form['mailhog_url'] = [
      '#title' => $this->t('MailHog url'),
      '#type' => 'url',
      '#required' => TRUE,
      '#default_value' => $this->settings->getMailHogUrl(),
      '#description' => $this->t('MailHog url'),
    ];

    $form['sender_email'] = [
      '#title' => $this->t('Sender email'),
      '#type' => 'email',
      '#attributes' => [
        'placeholder' => $defaultSenderEmail,
      ],
      '#default_value' => $this->settings->getSenderEmail(),
      '#description' => $this->t('Sender email address. If not set, %default_email (@default_email_source) will be used', [
        '%default_email' => $defaultSenderEmail,
        '@default_email_source' => $defaultSenderEmailSource,
      ]),
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->settings
      ->setMultiple([
        'mailhog_url' => $form_state->getValue('mailhog_url'),
        'sender_email' => $form_state->getValue('sender_email'),
        'outgoing_servers' => $form_state->getValue('outgoing_servers'),
      ]);
  }

}
