import Vue from 'vue';
import App from './App.vue';
import router from './router';
import button from './components/UI/button';
import VueResource from 'vue-resource';
import store from './store/store';
import Vuelidate from 'vuelidate';

import { MdCard } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';


Vue.config.productionTip = false
Vue.component('app-button', button)

Vue.use(Vuelidate)
// Resource 
Vue.use(VueResource)
Vue.http.options.root = 'https://test-83c06.firebaseio.com';
// Material
Vue.use(MdCard)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
