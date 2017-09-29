import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      token: "oasdkorgjeihioasdhjoohgfxdtbjh", //only a prop for now
      name: "geeq34",
      loggedIn: false
    }
  },
  mutations: {

  }
})
