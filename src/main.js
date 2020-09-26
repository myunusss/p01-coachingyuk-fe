import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import Multiselect from 'vue-multiselect'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/utils/global-icons'
import '@/utils/validations'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component('v-multiselect', Multiselect)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
