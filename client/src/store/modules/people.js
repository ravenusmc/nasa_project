import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

const state = {
	peopleData: [],
	peopleNoDataMessage: false,
};

const getters = {
	peopleData: state => state.peopleData,
	peopleNoDataMessage: state => state.peopleNoDataMessage,
};

const actions = {

	fetchPeopleInformation: ({ commit }, { profiles }) => {
		const profilesData = profiles.map(url => {
			return fetch(url)
				.then(response => response.json());
		});
		commit('setUseless', true)
		return Promise.all(profilesData);
	},

	fetchPeopleData: ({ commit, dispatch }) => {
		const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
		axios
			.get('http://api.open-notify.org/astros.json')
			.then(response => {
				const profiles = response.data.people.map(person => {
					return wikiUrl + person.name
				});
				return profiles
			})
			.then(profiles => {
				return Promise.all([
					dispatch('fetchPeopleInformation', { profiles })
				])
			})
			.then(profilesData => {
				const peopleData = []
				for (let i = 0; i < profilesData[0].length; i++) {
					if (profilesData[0][i].type != 'disambiguation') {
						peopleData.push(profilesData[0][i])
					}
				}
				return peopleData
			})
			.then(peopleData => {
				let i = 0; 
				const goodProfiles = peopleData.map(item => {
					const container = {}
					container.index = i
					container.name = item.title
					container.description = item.description
					container.info = item.extract
					container.img = item.originalimage.source
					i++
					return container
				})
				commit('setPeopleData', goodProfiles)
			})
			.catch(error => {
				commit('setPeopleNoDataMessage', true)
				console.log(error);
			})
	},

};


const mutations = {

	setPeopleData(state, data) {
		state.peopleData = data
	},

	setPeopleNoDataMessage(state, data) {
		state.peopleNoDataMessage = data
	},

	setUseless(state, data) {
		state.peopleData = data
	},

};


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

