<?php

namespace Drupal\mailhog\Entity;

/**
 *
 */
class MessageList extends Entity implements \Iterator {
  public $total;
  public $count;
  public $start;
  public $items;
  private $position;

  /**
   *
   */
  protected function build() {
    $this->total = $this->data['total'];
    $this->count = $this->data['count'];
    $this->start = $this->data['start'];
    $this->items = array_map(function ($item) {
      return new Message($item);
    }, $this->data['items']);
    $this->position = 0;
  }

  /**
   *
   */
  public function rewind() {
    $this->position = 0;
  }

  /**
   *
   */
  public function current() {
    return $this->items[$this->position];
  }

  /**
   *
   */
  public function key() {
    return $this->position;
  }

  /**
   *
   */
  public function next() {
    ++$this->position;
  }

  /**
   *
   */
  public function valid() {
    return isset($this->items[$this->position]);
  }

}
