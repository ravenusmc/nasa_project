import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

const state = {
	evaCountData: [],
	vehicleInformation: [],
	evaDrillDownInformation: [],
	showModal: false,
};

const getters = {
	evaCountData: state => state.evaCountData,
	vehicleInformation: state => state.vehicleInformation,
	evaDrillDownInformation: state => state.evaDrillDownInformation,
	showModal: state => state.showModal,
};

const actions = {

	fetchEvaCountData: ({ commit }) => {
		const path = 'http://localhost:5000/getEvaCountData';
		axios.post(path)
			.then((res) => {
				for (let i = 1; i < res.data.length; i++) {
					let date = new Date(res.data[i][0], 0, 1)
					res.data[i][0] = date
				}
				commit('setEvaCountData', res.data);
			})
			.catch(error => {
				console.log(error);
			})
	},

	fetchVehicleInformation: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/getEvaVehicleInformation';
		axios.post(path, payload)
			.then((res) => {
				commit('setVehicleInformation', res.data);
			})
			.catch(error => {
				console.log(error);
			})
	},

	fetchEVADrillDownData: ({ commit }, { payload }) => {
		const path = 'http://localhost:5000/getEvaDrillDownVehicleInformation';
		axios.post(path, payload)
			.then((res) => {
				commit('setEvaDrillDownInformation', res.data);
			})
	},

	changeShowModalDrillDown: ({ commit }) => {
		console.log('SHOW');
		commit('setShowModal', true)
	}

};

const mutations = {

	setEvaCountData(state, data) {
		state.evaCountData = data
	},

	setVehicleInformation(state, data) {
		state.vehicleInformation = data
	},

	setEvaDrillDownInformation(state, data) {
		state.evaDrillDownInformation = data
	},

	setShowModal(state, data) {
		state.showModal = data
	}

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};