import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
//add this line to your main.js file
store,
render: h => h(App)
}).$mount('#app')