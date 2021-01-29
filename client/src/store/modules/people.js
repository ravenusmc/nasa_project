import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

const state = {
	peopleData: [],
};

const getters = {
	peopleData: state => state.peopleData,
};

const actions = {

	fetchPeopleInformation: ({commit}, { profiles }) => {
		const profilesData = profiles.map(url => {
			return fetch(url)
							.then( response => response.json());
		});
		commit('setPeopleData', true)
		console.log(profilesData)
		// return Promise.all(profilesData);
		return profilesData
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
				console.log(profilesData)
			})
			.catch(error => {
				commit('setNoDataMessage', true)
				console.log(error);
			})
	},

};
				// const goodProfiles = peopleData.map(item => {
				// 		const container = {}
				// 		container[item.title] = item.title
				// 		container.name = "mike"
				// 		return container
				// })

const mutations = {

	setPeopleData(state, data) {
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

