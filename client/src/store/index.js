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
    marsNoData: true,
    marsRoverName: '',
    marsEarthDate: '',
  },

  getters: {
    marsData: state => state.marsData,
    marsLoadingMessage: state => state.marsLoadingMessage,
    marsNoData: state => state.marsNoData,
    marsRoverName: state => state.marsRoverName,
    marsEarthDate: state => state.marsEarthDate,
  },

  actions: {

    fetchMarsData: ({ commit }, { payload }) => {
      axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${payload.solDay}&camera=${payload.camera}&api_key=${nasaAPI.nasaAPI}`)
        .then(response => {
          if (response.data.photos.length == 0) {
            console.log('HERE');
            commit('setMarsNoData', false)
            commit('setMarsLoadingMessage', false);
          } else {
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
            let roverName = response.data.photos[0].rover.name
            let earthDate = response.data.photos[0].earth_date
            commit('setMarsEarthDate', earthDate)
            commit('setMarsRoverName',roverName)
            commit('setMarsData', marsDataParsed);
          }

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
    },

    setMarsNoData(state, data) {
      state.marsNoData = data
    },

    setMarsRoverName(state, data) {
      state.marsRoverName = data
    },

    setMarsEarthDate(state, data) {
      state.marsEarthDate = data
    }

  },

})
