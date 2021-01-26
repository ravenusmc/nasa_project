import Vue from 'vue';
import Vuex from 'vuex';
import mars from './modules/mars';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mars,
  },
})