const mutations = {
  setSelectedRoom: (state, payload) => {
    state.selectedRoom = payload;
  },
  setCurrentRoom: (state, payload) => {
    state.currentRoom = payload;
  },
  setOriginPublicKey: (state, payload) => {
    state.originPublicKey = payload;
  },
  setDestinationPublicKey: (state, payload) => {
    state.destinationPublicKey = payload;
  },
  addMessage: (state, payload) => {
    state.messages.push(payload);
  },
  addNotification: (state, payload) => {
    state.notifications.push(payload);
  },
  resetMessages: (state) => {
    state.messages = [];
  }
};
export default mutations;
