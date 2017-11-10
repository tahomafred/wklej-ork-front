import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      token: "",
      name: "",
      loggedIn: false
    },
  },
  mutations: {
    logIn (state,payload) {                         //I think these two can be done better
      state.user.token = payload.access_token;
      state.user.name = payload.username;
      state.user.loggedIn = true;
    },
    logOut (state) {
      state.user.token = "";
      state.user.name = "";
      state.user.loggedIn = false;
    }
  }
})
