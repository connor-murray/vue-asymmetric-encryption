const actions = {
  setSelectedRoom: (state, payload) => {
    state.commit("setSelectedRoom", payload)
  },
  setCurrentRoom: (state, payload) => {
    state.commit("setCurrentRoom", payload)
  },
  setOriginPublicKey: (state, payload) => {
    state.commit("setOriginPublicKey", payload)
  },
  setDestinationPublicKey: (state, payload) => {
    state.commit("setDestinationPublicKey", payload)
  },
  addMessage: (state, payload) => {
    state.commit("addMessage", payload)
  },
  addNotification: (state, payload) => {
    state.commit("addNotification", payload)
  },
  resetMessages: (state) => {
    state.commit("resetMessages")
  }
};
export default actions;
