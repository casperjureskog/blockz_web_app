

import axios from 'axios';
// const LOGIN_URL = 'https://b-block-api.herokuapp.com/api/v1';
const LOGIN_URL = 'http://localhost:3000/api/v1';
const state = {
    building: [],
    facilities: [],
};

const getters = {
    building: state => {
        return state.building
    },
    facilities: state => {
        return state.facilities
    },
};

const mutations = {
    building: (state, data) => {
        state.building = data
    },
    facilities: (state, data) => {
        state.facilities = data
    },
};

const actions = {
    getBuildings({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get(LOGIN_URL+'/buildings')
            .then((response) => {
                commit('building', response.data)
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            }); 
        })
    },
    getFacilities({ commit },data) {
        return new Promise((resolve, reject) => {
            axios.get(LOGIN_URL+'/facilities/'+data)
            .then((response) => {
                commit('facilities', response.data)
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            }); 
        })
    }				
}

const module = {
    state,
    getters,
    mutations,
    actions
};

export default module;
