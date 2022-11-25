import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from '@/store/modules/auth';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      last_name: '',
      token: null,
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});
