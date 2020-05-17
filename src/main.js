import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

import { store } from './store/store'

import VueTheMask from 'vue-the-mask'

import * as firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig/firebaseConfig';


Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

new Vue({
  VueTheMask,
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

