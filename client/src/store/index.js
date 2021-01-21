import Vue from 'vue';
import Vuex from 'vuex';
import nasaAPI from './keys.js';
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    marsData: [],
  },

  getters: {
    marsData: state => state.marsData,
  },

  actions: {

    fetchMarsData: ({commit}, { payload }) => {
      // what is is min / max date for sol date 
      console.log(payload.camera);
      axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${payload.solDay}&camera=${payload.camera}&api_key=${nasaAPI.nasaAPI}`)
        // .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + currentDateFormatted + '&api_key=' + nasaAPI.nasaAPI)
        .then(response => {
          console.log(response.data)
        })
        
      console.log(nasaAPI.nasaAPI);
      let data = 'Mike';
      commit('setMarsData', data);
    }

  },

  mutations: {

    setMarsData(state, data) {
      state.marsData = data
    },

  },

})
