import Vue from 'vue';
import Vuex from 'vuex';
import nasaAPI from '../keys.js';
import axios from 'axios';

Vue.use(Vuex)

const state = {
	pictureData: [],
	noDataMessage: false,
	noImage: true,
};

const getters = {
	pictureData: state => state.pictureData,
	noDataMessage: state => state.noDataMessage,
	noImage: state => state.noImage,
};

const actions = {

	fetchPictureData: ({ commit }) => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPI.nasaAPI}`)
			.then(response => {
				if (!Object.prototype.hasOwnProperty.call(response.data, "hdurl")) {
					commit('setNoImage', false)
				}
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
	},

	setNoImage(state, data) {
		state.noImage = data
	}

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};