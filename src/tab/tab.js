import Vue from 'vue';
import Slider from '@jeremyhamm/vue-slider';
import App from './App';

new Vue({
  el: '#app',
  // delimiters: ['[[', ']]'],
  render: h => h(App)
});

Vue.use(Slider)
