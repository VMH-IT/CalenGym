import axios from '@/axios/axios';
import router from '@/router';
import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  state: {
    currentUser: {},
    loginForm: {
      email: '',
      password: '',
    },
    registerForm: {
      height: '',
      weight: '',
      lname: '',
      fname: '',
      email: '',
      phone: '',
      gender: 0,
      age: '',
      password: '',
      Confirm: '',
    },
    listExercise: {
      
    }
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    setUserToken(state, newToken) {
      state.currentUser.token = newToken;
    },
    setUserName(state, newName) {
      state.currentUser.last_name = newName;
    },
    clearUserInfo(state) {
      (state.currentUser.token = null), (state.currentUser.name = '');
    },
    clearUserRegisterInfo(state) {
      state.registerForm = {};
    },
    clearLoginForm(state) {
      state.loginForm = {};
    },
  },
  actions: {
    async signIn({ state, commit }) {
      await axios
        .post('/users/sessions', {
          email: state.loginForm.email,
          password: state.loginForm.password,
        })
        .then((response) => {
          console.log(response);
          commit('setUserToken', response.data.token);
          commit('setUserName', response.data.user.last_name);
          alert('Đăng nhập thành công!');
          router.push('/Calendar.vue');
        })
        .catch((error) => {
          console.log(error);
          commit('clearLoginForm');
        });
    },

    signOut({ commit }) {
      commit('clearUserInfo');
      router.push('/');
    },

    async register({ state, commit }) {
      await axios
        .post('/users/users', {
          email: state.registerForm.email,
          password: state.registerForm.password,
          height: state.registerForm.height,
          weight: state.registerForm.weight,
          fname: state.registerForm.fname,
          lname: state.registerForm.lname,
          phone: state.registerForm.phone,
          gender: state.registerForm.gender,
          age:state.registerForm.age,
          Confirm: state.registerForm.Confirm,
        })
        .then((response) => {
          console.log(response);
          alert('Đăng kí thành công');
          commit('clearUserRegisterInfo');
        })
        .catch((error) => {
          console.log(error);
          commit('clearUserRegisterInfo');
        });
    },
   

  
  },
  modules: {},
};
