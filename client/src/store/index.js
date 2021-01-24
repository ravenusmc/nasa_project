import Vue from 'vue';
import Vuex from 'vuex';
import nasaAPI from './keys.js';
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    marsData: [],
    marsLoading: 'loading',
    marsLoadingMessage: false,
  },

  getters: {
    marsData: state => state.marsData,
    marsLoadingMessage: state => state.marsLoadingMessage,
  },

  actions: {

    fetchMarsData: ({ commit }, { payload }) => {
      axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${payload.solDay}&camera=${payload.camera}&api_key=${nasaAPI.nasaAPI}`)
        .then(response => {
          let marsData = response.data.photos;
          let marsDataParsed = [];
          for (let i = 0; i < marsData.length; i++) {
            let tempData = {}
            tempData.index = i
            tempData.earth_date = marsData[i].earth_date
            tempData.image = marsData[i].img_src
            tempData.rover_name = marsData[i].rover.name
            marsDataParsed.push(tempData)
          }
          commit('setMarsData', marsDataParsed);
          commit('setMarsLoadingMessage', false);
        })
    },

    fetchMarsLoadingMessage({ commit }, { message }) {
      commit('setMarsLoadingMessage', message.loading);
    }

  },

  mutations: {

    setMarsData(state, data) {
      state.marsData = data
    },

    setMarsLoadingMessage(state, data) {
      state.marsLoadingMessage = data
    }

  },

})
