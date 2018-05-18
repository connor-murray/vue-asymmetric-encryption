export default {
  methods: {
    getKeySnippet(key) {
      const keySnippetLength = 8;
      return key ? key.slice(key.length - keySnippetLength, key.length) : '';
    },

    getRandomRoom() {
      return Math.floor(Math.random() * 1000);
    },

    autoScroll(element) {
      if (element) {
        element.scrollTop = element.scrollHeight
      }
    },

    getTimeStamp() {
      return new Date().toLocaleTimeString();
    }
  }
};
