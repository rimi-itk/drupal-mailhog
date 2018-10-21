<?php

namespace Drupal\mailhog\Entity;

/**
 *
 */
abstract class Entity {
  protected $data;

  /**
   *
   */
  public function __construct(array $data) {
    $this->data = $data;
    $this->build();
  }

  /**
   *
   */
  protected function build() {}

}
