import Vue from 'vue';
import Vuex from 'vuex';
import nasaAPI from '../keys.js';
import axios from 'axios';

Vue.use(Vuex)

const state = {
	pictureData: [],
};

const getters = {
	pictureData: state => state.pictureData,
};

const actions = {

	fetchPictureData: ({ commit }) => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPI.nasaAPI}`)
			.then(response => {
				commit('setPictureData', response.data)
			})
	},

};

const mutations = {

	setPictureData(state, data) {
		state.pictureData = data
	},

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};