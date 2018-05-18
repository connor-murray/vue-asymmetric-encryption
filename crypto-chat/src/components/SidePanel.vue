<template>
  <div class="info-container full-width">
    <h1>CHATROOM</h1>

    <chat-room></chat-room>

    <div class="divider"></div>
    <notification-log></notification-log>
    <div class="divider"></div>

    <rsa-key></rsa-key>
  </div>
</template>

<script>
  import NotificationLog from './NotificationLog';
  import RsaKey from './Rsakey';
  import ChatRoom from './ChatRoom.vue';

  export default {
    name: 'SidePanel',
    components: {NotificationLog, RsaKey, ChatRoom},
  }
</script>

<style scoped>
  .full-width {
    width: 100%;
  }

  .info-container {
    flex: 0 0 40%;
    border-left: solid 1px var(--light-grey);
    padding: 12px;
    overflow-x: hidden;
    margin-bottom: 50px;
    position: relative;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
  }

  .divider {
    padding-top: 1px;
    max-height: 0;
    min-width: 200%;
    background: var(--light-grey);
    margin: 12px -12px;
  }
</style>
