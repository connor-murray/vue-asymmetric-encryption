const getters = {
  currentRoom: state => state.currentRoom,
  selectedRoom: state => state.selectedRoom,
  originPublicKey: state => state.originPublicKey,
  destinationPublicKey: state => state.destinationPublicKey,
  messages: state => state.messages,
  notifications: state => state.notifications
};
export default getters;
