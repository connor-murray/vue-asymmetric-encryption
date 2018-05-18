<template>
  <div class="room-select">
    <input type="text" class="full-width" placeholder="Room Name" id="room-input" v-model="selectedRoom"
           @keyup.enter="joinRoom()">
    <input class="yellow-button full-width" type="submit" v-on:click="joinRoom()" value="JOIN">
  </div>
</template>

<script>
  import helperMixin from '../mixins/helper';
  import {eventBus} from '../main';
  import {mapActions} from 'vuex'

  export default {
    name: 'ChatRoom',
    mixins: [helperMixin],
    data() {
      return {
        selectedRoom: null
      }
    },
    created() {
      this.selectedRoom = this.getRandomRoom();
      this.setSelectedRoom(this.selectedRoom);
    },
    methods: {
      ...mapActions([
        'setSelectedRoom'
      ]),
      joinRoom() {
        this.setSelectedRoom(this.selectedRoom);
        eventBus.$emit('joinRoom');
      }
    }
  }
</script>

<style scoped>
  .room-select {
    display: flex;
    min-height: 24px;
    font-family: 'Montserrat', sans-serif;
  }

  .full-width {
    width: 100%;
  }

  .yellow-button {
    flex: 0 0 20%;
    background: none;
    border: 1px solid var(--highlight);
    color: var(--highlight);
    cursor: pointer;
  }

  .yellow-button:hover {
    background: var(--highlight);
    color: var(--black);
  }

  #room-input {
    flex: 0 0 80%;
    background: none;
    border: none;
    border-bottom: 1px solid var(--light-grey);
    border-top: 1px solid var(--light-grey);
    border-left: 1px solid var(--light-grey);
    color: var(--light-grey);
    padding: 4px;
  }
</style>

