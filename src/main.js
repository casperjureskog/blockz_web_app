import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')