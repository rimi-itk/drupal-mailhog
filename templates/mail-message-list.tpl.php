<?php

/**
 * @file
 * Mail message list template.
 */
?>
<div class="mail-message-list">
  <table>
    <thead>
      <tr>
        <th><?php echo t('From'); ?></th>
        <th><?php echo t('To'); ?></th>
        <th><?php echo t('Subject'); ?></th>
        <th><?php echo t('Date'); ?></th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($messages['items'] as $message): ?>
        <?php $show_url = mailhog_path('mailhog.message_show', ['id' => $message['ID']]); ?>
        <tr>
          <td><a href="<?php echo $show_url; ?>"><?php echo $message['Raw']['From']; ?></a></td>
          <td>
            <a href="<?php echo $show_url; ?>">
              <?php foreach ($message['Raw']['To'] as $index => $to): ?>
                <?php if ($index > 0): ?>
                  <br/>
                <?php endif ?>
                <?php echo $to; ?>
              <?php endforeach ?>
            </a>
          </td>
          <td><a href="<?php echo $show_url; ?>"><?php echo $message['Content']['Headers']['Subject'][0]; ?></a></td>
          <td><a href="<?php echo $show_url; ?>"><?php echo (new \DateTime($message['Content']['Headers']['Date'][0]))->format(\DateTime::ATOM); ?></a></td>
        </tr>
      <?php endforeach ?>
    </tbody>
  </table>
</div>
