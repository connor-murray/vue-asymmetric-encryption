<template>
  <div class="chat-container full-width" ref="chatContainer">
    <div class="message-list">
      <div class="message full-width" v-for="message in messages">
        <p>
            <span
              v-bind:class="(message.origin) ? 'green' : 'red'">{{ (message.origin) ? getKeySnippet(originPublicKey) : getKeySnippet(destinationPublicKey)}}</span>
          > {{ message.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import helperMixin from '../mixins/helper';
  import {mapGetters} from 'vuex'

  export default {
    name: 'MessagePanel',
    mixins: [helperMixin],
    watch: {
      'messages': function () {
        this.autoScroll(this.$refs.chatContainer)
      }
    },
    computed: mapGetters([
      'messages',
      'originPublicKey',
      'destinationPublicKey'
    ])
  }
</script>

<style scoped>
  .chat-container {
    flex: 0 0 60%;
    word-wrap: break-word;
    overflow-x: hidden;
    padding: 6px;
    margin-bottom: 50px;
  }

  .full-width {
    width: 100%;
  }

  .message-list {
    margin-bottom: 40px;
  }

  .message > p {
    font-size: small;
  }

  .green {
    color: green;
  }

  .red {
    color: red;
  }
</style>
