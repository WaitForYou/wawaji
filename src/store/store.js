import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import { saveLocal } from '../store/util';

Vue.use(Vuex)

//const HOST = '/api/';
const HOST = 'http://api.momole.com.cn:8081/prizeclaw/'

const moduleA = {
	state:{
		movie:{}
	},
	actions:{
		LOAD_MOVIE_IN_THEATERS: function ({ commit }) {
		  axios.get(HOST + 'movie/in_theaters', { 'city': '广州' })
		  .then((response) => {
		  	  console.log(response.data)
		      commit('SET_MOVIE_LIST',{ moviesMsg: response.data })
		  });
		},
	},
	mutations:{
		SET_MOVIE_LIST: function(state, {moviesMsg}){
			state.movie = moviesMsg;
		}
	},
	getters:{

	}
}

const moduleHome = {
  state: {
  	advertise: [],
  	multiList: [],
  	currentRoomList: []
  },
  actions: {
  	ADVERTISE: function({commit}){
	  axios.post(HOST + 'api/common/v1/advertise.json', { 'sessionid': '519836784B4D79874660663537B41796BE11A2861BC6D141' })
	  .then((response) => {
	      commit('SET_ADVERTISE',{advertise: response.data })
	  });
  	},
  	HOME_ROOM_LIST: function({commit}){
	  axios.post(HOST + '/api/machine/v1/homeRoomList.json', { 'sessionid': '519836784B4D79874660663537B41796BE11A2861BC6D141' })
	  .then((response) => {
	      commit('SET_HOME_ROOM_LIST',{response: response.data })
	  });
  	},
  	ROOM_LIST_BY_FLAG: function({commit}, param){
  		let params = param || {};
		axios.post(HOST + '/api/machine/v1/roomListByFlag.json', params)
		.then((response) => {
		  commit('SET_ROOM_LIST_BY_FLAG',{response: response.data })
		});
  	}
  },
  mutations: {
  	SET_ADVERTISE: function(state, {advertise}){
  		if(advertise.code == 1){
  			state.advertise = advertise.object;
  		}
  	},
  	SET_HOME_ROOM_LIST: function(state, {response}){
  		if(response.code == 1){
  			state.multiList = response.object;
  		}
  	},
  	SET_ROOM_LIST_BY_FLAG: function(state, {response}){
  		if(response.code == 1){
  			state.currentRoomList = response.object;
  		}
  	}
  },
  getters: {
 //  	getSingleTypeRooms: (state, getters) => (roomtype) => {
 //  		console.log(roomtype)
 //  		console.log(state)
 //  		console.log(state.multiList[roomtype])
	//     return state.multiList[roomtype]
	// }
  }
}

const moduleRoomList = {
  state: {
  	listObject: {},
  	currentRoomlist: [],
  	pageNumber: -1
  },
  actions: {
  	ROOM_LIST_BY_FLAG: function({commit}, param){
  		let params = param || {};
		axios.post(HOST + '/api/machine/v1/roomListByFlag.json', params)
		.then((response) => {
			console.log(1)
		 	commit('SET_ROOM_LIST_BY_FLAG',{response: response.data})
		});
  	}
  },
  mutations: {
  	SET_ROOM_LIST_BY_FLAG: function(state, {response}){
  		if(response.code == 1){
  			console.log(2)
  			state.listObject = response.object;
  		}
  	}
  },
  getters: {
    roomlist: state => {
    	state.currentRoomlist.push.apply( state.currentRoomlist, state.listObject.list );
    	state.listObject = {};
    	console.log(state.currentRoomlist)
		return state.currentRoomlist;
    },
    hasNextPage: state => {
		return state.listObject.hasNextPage
    }
  }
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    moduleHome: moduleHome,
    moduleRoomList: moduleRoomList
  }
})

export default store

// const moduleA = {
//   state: { ... },
//   mutations: { ... },
//   actions: { ... },
//   getters: { ... }
// }

// const moduleB = {
//   state: { ... },
//   mutations: { ... },
//   actions: { ... }
// }

// const store = new Vuex.Store({
//   modules: {
//     a: moduleA,
//     b: moduleB
//   }
// })

// store.state.a // -> moduleA 的状态
// store.state.b // -> moduleB 的状态

