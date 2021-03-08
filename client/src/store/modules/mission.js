import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios'

Vue.use(Vuex)

const state = {
	missionData: [
		['Year', 'Mission Count'], 
		[1958, 3], 
		[1959, 28], 
		[1960, 20], 
		[1961, 39], 
		[1962, 52], 
		[1963, 82], 
		[1964, 41], 
		[1965, 60], 
		[1966, 87], 
		[1967, 101], 
		[1968, 106], 
		[1969, 103], 
		[1970, 103], 
		[1971, 107], 
		[1972, 119], 
		[1973, 99], 
		[1974, 103], 
		[1975, 98], 
		[1976, 113], 
		[1977, 113], 
		[1978, 114], 
		[1979, 97], 
		[1980, 49], 
		[1981, 55], 
		[1982, 71], 
		[1983, 67], 
		[1984, 66], 
		[1985, 69], 
		[1986, 74], 
		[1987, 62], 
		[1988, 56], 
		[1989, 59], 
		[1990, 52], 
		[1991, 80], 
		[1992, 59], 
		[1993, 62], 
		[1994, 61], 
		[1995, 64], 
		[1996, 61], 
		[1997, 60], 
		[1998, 70], 
		[1999, 68],
		[2000, 57], 
		[2001, 57], 
		[2002, 43], 
		[2003, 49], 
		[2004, 52], 
		[2005, 40], 
		[2006, 37], 
		[2007, 49], 
		[2008, 50], 
		[2009, 48], 
		[2010, 50], 
		[2011, 37], 
		[2012, 42], 
		[2013, 38], 
		[2014, 46], 
		[2015, 53], 
		[2016, 52], 
		[2017, 90], 
		[2018, 92], 
		[2019, 117], 
		[2020, 109], 
		[2021, 63]],
};

const getters = {
	missionData: state => state.missionData,
};

// const actions = {

// 	fetchMarsData: ({ commit }, {payload}) => {
// 		axios
// 			.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${payload.solDay}&camera=${payload.camera}&api_key=${nasaAPI.nasaAPI}`)
// 			.then(response => {
// 				if (response.data.photos.length == 0) {
// 					commit('setMarsNoData', true)
// 					commit('setMarsLoadingMessage', false);
// 				} else {
// 					let marsData = response.data.photos;
// 					let marsDataParsed = [];
// 					for (let i = 0; i < marsData.length; i++) {
// 						let tempData = {}
// 						tempData.index = i
// 						tempData.image = marsData[i].img_src
// 						marsDataParsed.push(tempData)
// 					}
// 					let roverName = response.data.photos[0].rover.name
// 					let earthDate = response.data.photos[0].earth_date
// 					commit('setMarsNoData', false)
// 					commit('setMarsEarthDate', earthDate)
// 					commit('setMarsRoverName', roverName)
// 					commit('setMarsData', marsDataParsed);
// 					commit('setMarsLoadingMessage', false);
// 				}
// 			})
// 			.catch(error => {
// 				console.log(error);
// 			})
// 	},

// };

const mutations = {

	setMarsData(state, data) {
		state.marsData = data
	},


};

export default {
	namespaced: true,
	state,
	getters,
	// actions,
	mutations
};
