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

	fetchPeopleData: ({ commit }) => {
		const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
		axios
			.get('http://api.open-notify.org/astros.json')
			.then(response => {
				const profiles = response.data.people.map(person => {
					return wikiUrl + person.name
				});
				for(let i = 0; i < profiles.length; i++) {
					axios
						.get(profiles[i])
						.then(response => {
							if (response.data.type != 'disambiguation') {
								const goodProfiles = response.data.map((title, extract) => {
									return title + extract
								})
								console.log(goodProfiles)
							}
						})
				}
				const data = 'Mike';
				commit('setPeopleData', data)
			})
			.catch(error => {
				commit('setNoDataMessage', true)
				console.log(error);
			})
	},

};


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

