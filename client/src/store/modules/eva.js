import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios'

Vue.use(Vuex)

const state = {
	evaCountData: [
		['Year', 'EVA Count'], 
		[1965, 2], 
		[1966, 9], 
		[1969, 8], 
		[1971, 9], 
		[1972, 10], 
		[1973, 11], 
		[1974, 1], 
		[1977, 1], 
		[1978, 1], 
		[1979, 1], 
		[1982, 2], 
		[1983, 3], 
		[1984, 14], 
		[1985, 6], 
		[1986, 2], 
		[1987, 3], 
		[1988, 4], 
		[1990, 9], 
		[1991, 12], 
		[1992, 10], 
		[1993, 15], 
		[1994, 3], 
		[1995, 12], 
		[1996, 13], 
		[1997, 14], 
		[1998, 13], 
		[1999, 7], 
		[2000, 10], 
		[2001, 18], 
		[2002, 23], 
		[2003, 2], 
		[2004, 5], 
		[2005, 7], 
		[2006, 14], 
		[2007, 23], 
		[2008, 19], 
		[2009, 22],
		[2010, 15], 
		[2011, 10], 
		[2012, 5], 
		[2013, 6]
	],
};

const getters = {
	evaCountData: state => state.evaCountData,
};

export default {
	namespaced: true,
	state,
	getters,
	// actions,
	// mutations
};