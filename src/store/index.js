import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios';
import building from './building';
// const LOGIN_URL = 'https://b-block-api.herokuapp.com/api/v1';
const LOGIN_URL = 'http://localhost:3000/api/v1';


export default new Vuex.Store({
    modules: {
		building,
    },
  state: {
    token:'',
    mobiles:[],
  },
  mutations: {
    setMobiles(state, mobiles) {
      state.mobiles = mobiles;
    },
    setToken(state, t) {
      state.token = t;
    },
  },
  actions: {
    async login(context, credentials) {
      return axios.post(LOGIN_URL+'/auth/sign_in', {
            email: credentials.username,
          password: credentials.password
      })
      .then(res => {
        console.log('re data', res);
        context.commit('setToken', res.data.token);
        return true;
      })
      .catch(error => {
        console.error(error);
      });  
    }
  }
})