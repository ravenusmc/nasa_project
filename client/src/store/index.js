import Vue from 'vue';
import Vuex from 'vuex';
import mars from './modules/mars';
import picture from './modules/picture';
import people from './modules/people';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mars,
    picture,
    people
  },
})