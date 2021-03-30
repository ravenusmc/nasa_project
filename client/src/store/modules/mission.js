import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

const state = {
	missionData: [
		['Year', 'Mission Count'],
		[new Date(1958, 0, 1), 3],
		[new Date(1959, 0, 1), 28],
		[new Date(1960, 0, 1), 20],
		[new Date(1961, 0, 1), 39],
		[new Date(1962, 0, 1), 52],
		[new Date(1963, 0, 1), 82],
		[new Date(1964, 0, 1), 41],
		[new Date(1965, 0, 1), 60],
		[new Date(1966, 0, 1), 87],
		[new Date(1967, 0, 1), 101],
		[new Date(1968, 0, 1), 106],
		[new Date(1969, 0, 1), 103],
		[new Date(1970, 0, 1), 103],
		[new Date(1971, 0, 1), 107],
		[new Date(1972, 0, 1), 119],
		[new Date(1973, 0, 1), 99],
		[new Date(1974, 0, 1), 103],
		[new Date(1975, 0, 1), 98],
		[new Date(1976, 0, 1), 113],
		[new Date(1977, 0, 1), 113],
		[new Date(1978, 0, 1), 114],
		[new Date(1979, 0, 1), 97],
		[new Date(1980, 0, 1), 49],
		[new Date(1981, 0, 1), 55],
		[new Date(1982, 0, 1), 71],
		[new Date(1983, 0, 1), 67],
		[new Date(1984, 0, 1), 66],
		[new Date(1985, 0, 1), 69],
		[new Date(1986, 0, 1), 74],
		[new Date(1987, 0, 1), 62],
		[new Date(1988, 0, 1), 56],
		[new Date(1989, 0, 1), 59],
		[new Date(1990, 0, 1), 52],
		[new Date(1991, 0, 1), 80],
		[new Date(1992, 0, 1), 59],
		[new Date(1993, 0, 1), 62],
		[new Date(1994, 0, 1), 61],
		[new Date(1995, 0, 1), 64],
		[new Date(1996, 0, 1), 61],
		[new Date(1997, 0, 1), 60],
		[new Date(1998, 0, 1), 70],
		[new Date(1999, 0, 1), 68],
		[new Date(2000, 0, 1), 57],
		[new Date(2001, 0, 1), 57],
		[new Date(2002, 0, 1), 43],
		[new Date(2003, 0, 1), 49],
		[new Date(2004, 0, 1), 52],
		[new Date(2005, 0, 1), 40],
		[new Date(2006, 0, 1), 37],
		[new Date(2007, 0, 1), 49],
		[new Date(2008, 0, 1), 50],
		[new Date(2009, 0, 1), 48],
		[new Date(2010, 0, 1), 50],
		[new Date(2011, 0, 1), 37],
		[new Date(2012, 0, 1), 42],
		[new Date(2013, 0, 1), 38],
		[new Date(2014, 0, 1), 46],
		[new Date(2015, 0, 1), 53],
		[new Date(2016, 0, 1), 52],
		[new Date(2017, 0, 1), 90],
		[new Date(2018, 0, 1), 92],
		[new Date(2019, 0, 1), 117],
		[new Date(2020, 0, 1), 109],
		[new Date(2021, 0, 1), 63]
	],
	successFailuresMissionData: [],
	missionLocationsData: [],
};

const getters = {
	missionData: state => state.missionData,
	successFailuresMissionData: state => state.successFailuresMissionData,
	missionLocationsData: state => state.missionLocationsData,
};

const actions = {

	fetchMissionSuccessFailures: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/getMissionBySuccessFailure';
		axios.post(path, payload)
			.then((res) => {
				for (let i = 1; i < res.data.length; i++) {
					let date = new Date(res.data[i][0], 0, 1)
					res.data[i][0] = date
				}
				commit('setSuccessFailuresMissionData', res.data);
			})
			.catch(error => {
				console.log(error);
			})
	},

	fetchMissionLocations: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/getMissionByLocation';
		axios.post(path, payload)
			.then((res) => {
				console.log(res.data)
				for (let i = 1; i < res.data.length; i++) {
					let date = new Date(res.data[i][1], 0, 1)
					res.data[i][1] = date
				}
				commit('setMissionLocationsData', res.data);
			})
			.catch(error => {
				console.log(error);
			})
	},

};

const mutations = {

	setSuccessFailuresMissionData(state, data) {
		state.successFailuresMissionData = data
	},

	setMissionLocationsData(state, data) {
		state.missionLocationsData = data
	},	

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
