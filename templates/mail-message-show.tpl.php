<?php

/**
 * @file
 * Mail message show template.
 */
?>
<div class="mail-message-show">
  <div class="actions">
    <form method="post" action="<?php echo mailhog_path('mailhog.message_delete', ['id' => $message['ID']]); ?>">
      <button class="button" type="submit" name="_method" value="DELETE"><?php echo t('Delete mail message'); ?></button>
    </form>
    <form method="post" action="<?php echo mailhog_path('mailhog.message_release', ['id' => $message['ID']]); ?>">
      <input class="form-email" type="email" name="email" placeholder="Email address" required/>
      <button class="button" type="submit" name="action" value="release"><?php echo t('Release mail message'); ?></button>
    </form>
    <a class="button" href="<?php echo mailhog_path('mailhog.message_list'); ?>"><?php echo t('Back to the messages list'); ?></a>
  </div>

  <table class="mail-header">
    <tr>
      <th class="message-label"><?php echo t('From'); ?></th>
      <td class="message-value"><?php echo $message['Raw']['From']; ?></td>
    </tr>

    <tr>
      <th class="message-label"><?php echo t('To'); ?></th>
      <td class="message-value">
        <form method="post" action="<?php echo mailhog_path('mailhog.message_release', ['id' => $message['ID']]) ?>">
          <?php foreach ($message['Raw']['To'] as $to): ?>
            <?php echo $to; ?>
            <button class="button mail-recipient" type="submit" name="email" value="<?php echo $to; ?>" title="<?php echo t('Release mail message to @to', ['@to' => $to]); ?>"><?php echo t('Send as mail'); ?></button>
          <?php endforeach ?>
        </form>
      </td>
    </tr>

    <tr>
      <th class="message-label"><?php echo t('Date'); ?></th>
      <td class="message-value"><?php echo (new \DateTime($message['Content']['Headers']['Date'][0]))->format(\DateTime::ATOM); ?></td>
    </tr>

    <tr>
      <th class="message-label"><?php echo t('Subject'); ?></th>
      <td class="message-value"><?php echo $message['Content']['Headers']['Subject'][0]; ?></td>
    </tr>
  </table>

  <div class="mail-content">
    <div class="tabs">
      <ul class="nav nav-tabs tabs primary">
        <?php $loop_first = TRUE; foreach ($message['Bodies'] as $type => $item): ?>
          <li class="nav-item <?php echo $loop_first ? 'active' : '' ?>">
            <a class="nav-link <?php echo $loop_first ? 'active' : '' ?>" href="#<?php echo $type; ?>"><?php echo $type; ?></a>
          </li>
        <?php $loop_first = FALSE;
        endforeach ?>

        <?php foreach (['source', 'mime'] as $type): ?>
          <li class="nav-item">
            <a class="nav-link" href="#<?php echo $type; ?>"><?php echo $type; ?></a>
          </li>
        <?php endforeach ?>
      </ul>
    </div>

    <div class="tab-content">
      <?php $loop_first = TRUE; foreach ($message['Bodies'] as $type => $item): ?>
        <div class="tab-pane  <?php echo $loop_first ? 'active' : '' ?>" id="<?php echo $type; ?>" role="tabpanel" aria-labelledby="<?php echo $type; ?>-tab">
          <div class="message-value message-body <?php echo 'type-' . preg_replace('/[^a-z0-9_-]/i', '-', $type); ?>"><?php echo $item['Body']; ?></div>
        </div>
      <?php $loop_first = FALSE;
      endforeach ?>

      <?php $type = 'source' ?>
      <div class="tab-pane" id="<?php echo $type; ?>" role="tabpanel" aria-labelledby="<?php echo $type; ?>-tab">
        <div class="message-value message-body message-source"><?php echo htmlspecialchars($message['Raw']['Data']); ?></div>
      </div>

      <?php $type = 'mime' ?>
      <div class="tab-pane" id="<?php echo $type; ?>" role="tabpanel" aria-labelledby="<?php echo $type; ?>-tab">
        <div class="message-value">
          <?php foreach ($message['MIME']['Parts'] as $index => $part): ?>
            <?php if ($index > 0): ?>
              <br/>
            <?php endif ?>
            <a class="button" href="<?php echo mailhog_path('mailhog.message_part_download', ['id' => $message['ID'], 'part' => $index]); ?>"><?php echo t('Download part'); ?></a>
            <?php echo isset($part['Headers']['Content-Type']) ? implode(',', $part['Headers']['Content-Type']) : t('Unknown type'); ?>
            <?php $size = isset($part['Size']) ? (int) $part['Size'] : 0; ?>
            <?php echo ' (' . t('@size bytes', ['@size' => $size]) . ')'; ?>
          <?php endforeach ?>
        </div>
      </div>

    </div>
  </div>
</div>
