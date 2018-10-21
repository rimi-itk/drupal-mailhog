<?php

namespace Drupal\mailhog\Entity;

/**
 *
 */
class Part extends Entity {
  const UNKNOWN = 'unknown';

  public $contentType;
  public $type;
  public $headers;
  public $body;

  /**
   *
   */
  public function isText() {
    return preg_match('@^text/@', $this->contentType);
  }

  /**
   *
   */
  public function isHtml() {
    return preg_match('@^text/html@', $this->contentType);
  }

  /**
   *
   */
  public function isImage() {
    return preg_match('@^image/@', $this->contentType);
  }

  /**
   *
   */
  public function isAttachment() {
    return !$this->isText();
  }

  /**
   *
   */
  protected function build() {
    $this->contentType = isset($this->data['Headers']['Content-Type'][0]) ? $this->data['Headers']['Content-Type'][0] : self::UNKNOWN;
    $this->size = $this->data['Size'];
    $this->type = preg_replace('/;.*/', '', $this->contentType);
    $this->headers = [];
    foreach ($this->data['Headers'] as $name => $value) {
      $this->headers[strtolower($name)] = implode(',', $value);
    }
    $this->body = $this->data['Body'];
    $encoding = isset($this->headers['content-transfer-encoding']) ? $this->headers['content-transfer-encoding'] : NULL;
    if ('base64' === $encoding) {
      $this->body = base64_decode($this->body);
    }
  }

}
