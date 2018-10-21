<?php

namespace Drupal\mailhog\Entity;

/**
 *
 */
class Message extends Entity {
  public $id;
  public $from;
  public $to;
  public $subject;
  public $date;
  public $parts;
  public $source;

  /**
   *
   */
  protected function build() {
    $this->id = $this->data['ID'];
    $this->from = $this->data['Raw']['From'];
    $this->to = $this->data['Raw']['To'];
    $this->subject = $this->data['Content']['Headers']['Subject'][0];
    $this->date = new \DateTime($this->data['Content']['Headers']['Date'][0]);
    $this->parts = $this->getParts();
    $this->source = $this->data['Content']['Body'];
  }

  /**
   *
   */
  public function getHtmlPart() {
    foreach ($this->parts as $part) {
      if ($part->isHtml()) {
        return $part;
      }
    }

    return NULL;
  }

  /**
   *
   */
  public function getTextPart() {
    foreach ($this->parts as $part) {
      if ($part->isText() && !$part->isHtml()) {
        return $part;
      }
    }

    return NULL;
  }

  /**
   *
   */
  private function getParts() {
    $data = isset($this->data['MIME']['Parts']) ? $this->data['MIME']['Parts'] : [$this->data['Content']];
    $parts = [];
    $this->collectParts($data, $parts);

    return $parts;
  }

  /**
   *
   */
  private function collectParts(array $items, array &$parts) {
    foreach ($items as $item) {
      if (isset($item['MIME']['Parts'])) {
        $this->collectParts($item['MIME']['Parts'], $parts);
      }
      elseif (isset($item['Headers']['Content-Type'][0])) {
        $parts[] = new Part($item);
      }
    }
  }

}
