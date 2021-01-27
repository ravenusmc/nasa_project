import Vue from 'vue';
import Vuex from 'vuex';
import nasaAPI from '../keys.js';
import axios from 'axios';

Vue.use(Vuex)

const state = {
	pictureData: [],
	noDataMessage: false,
};

const getters = {
	pictureData: state => state.pictureData,
	noDataMessage: state => state.noDataMessage,
};

const actions = {

	fetchPictureData: ({ commit }) => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPI.nasaAPI}`)
			.then(response => {
				commit('setPictureData', response.data)
			})
			.catch(error => {
				commit('setNoDataMessage', true)
				console.log(error);
			})
	},

};

const mutations = {

	setPictureData(state, data) {
		state.pictureData = data
	},

	setNoDataMessage(state, data) {
		state.noDataMessage = data
	}

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};