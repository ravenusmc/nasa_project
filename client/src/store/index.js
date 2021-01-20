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

    fetchMarsData: ({commit}) => {
      // Need to allow user to change sol date, 
      // Need to allow user to change camera 
      // what is is min / max date for sol date 
      axios
        .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&camera=fhaz&api_key=DEMO_KEY')
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
