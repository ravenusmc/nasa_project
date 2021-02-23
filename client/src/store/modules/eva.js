import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

const state = {
	evaCountData: [],
	vehicleInformation: [],
	evaDrillDownInformation: [],
	showModal: false,
	showChart: true, 
};

const getters = {
	evaCountData: state => state.evaCountData,
	vehicleInformation: state => state.vehicleInformation,
	evaDrillDownInformation: state => state.evaDrillDownInformation,
	showModal: state => state.showModal,
	showChart: state => state.showChart,
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
				console.log(res.data)
				commit('setEvaDrillDownInformation', res.data);
			})
	},

	changeChartOrDrillDown: ({ dispatch }, { chartPayload } ) => {
		dispatch('changeShowModalDrillDown', { chartPayload })
		dispatch('ShowChart', { chartPayload })
	},

	changeShowModalDrillDown: ({ commit }, { chartPayload }) => {
		commit('setShowModal', chartPayload.drilldown)

	},

	ShowChart: ({ commit }, { chartPayload }) => {
		commit('setEvaDrillDownInformation', [])
		commit('setShowChart', chartPayload.chart)
	},

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
	},

	setShowChart(state, data) {
		state.showChart = data
	}

};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};