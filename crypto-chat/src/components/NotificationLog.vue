<template>
  <div class="notification-list" ref="notificationContainer">
    <h1>NOTIFICATION LOG</h1>
    <div class="notification full-width" v-for="notification in notifications">
      <div class="notification-timestamp">{{ notification.timestamp }}</div>
      <div class="notification-message">{{ notification.message }}</div>
    </div>
  </div>
</template>

<script>
  import helperMixin from '../mixins/helper';
  import {mapGetters} from 'vuex'

  export default {
    name: 'NotificationLog',
    mixins: [helperMixin],
    watch: {
      'notifications': function () {
        this.autoScroll(this.$refs.notificationContainer);
      }
    },
    computed: mapGetters([
      'notifications'
    ])
  }
</script>

<style scoped>
  .full-width {
    width: 100%;
  }

  .notification-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    flex: 1 0 40%;
  }

  .notification {
    font-family: 'Montserrat', sans-serif;
    font-size: small;
    padding: 4px 0;
    display: inline-flex;
  }

  .notification-timestamp {
    flex: 0 0 20%;
    padding-right: 12px;
  }

  .notification-message {
    flex: 0 0 80%;
  }

  .notification:last-child {
    margin-bottom: 24px;
  }
</style>
