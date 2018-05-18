<template>
  <div class="bottom-bar full-width">
    > <input class="message-input" type="text" placeholder="Message" v-model="message"
             @keyup.enter="sendMessage">
  </div>
</template>

<script>
  export default {
    name: 'MessageInput',
    data() {
      return {
        message: ''
      }
    },
    methods: {
      sendMessage() {
        if (this.message) {
          this.$emit('sendMessage', this.message);
          this.clearMessage();
        }
      },
      clearMessage() {
        this.message = '';
      }
    }
  }
</script>

<style scoped>
  .message-input {
    background: none;
    border: none;
    color: var(--light-grey);
    width: 90%;
  }

  .bottom-bar {
    border-top: solid 1px var(--light-grey);
    background: var(--black);
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 12px;
  }

  .full-width {
    width: 100%;
  }
</style>
