import Vue from 'vue';
import App from './App';
import VueWorker from 'vue-worker';
import store from './store/store';

Vue.use(VueWorker);
Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  el: '#app',
  components: {App},
  store: store,
  template: '<App/>'
});
