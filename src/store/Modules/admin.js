/*eslint-disable*/
import Vue from 'vue';

const FbAuth = "https://identitytoolkit.googleapis.com/v1/accounts:";
const FbApikey = "AIzaSyDALesIoKb0fBQG4uJAy0AqTiNf1lZ7USM";

const admin = {
  namespaced: true,
  state: {
    token: null,
    refresh: null,
    authFailed: false
  },
  getters: {

  },
  mutations: {
    authUser(state, payload){
      state.token = payload.idToken;
      state.refresh = payload.refreshToken;
    },
    authFailed(state, type){
      if(type === 'reset'){
        console.log("hello")
      } else {
        state.authFailed = true;
        setTimeout(()=>{state.authFailed = false}, 3000)
      }
    }
  },
  actions: {
    signIn({commit}, payload){
      Vue.http.post(`${FbAuth}signInWithPassword?key=${FbApikey}`, {
        ...payload,
        returnSecureToken: true
      })
      .then(response => response.json())
      .then(authData => {
        commit('authUser', {...authData, type: "signin"});
        localStorage.setItem('token', authData.idToken);
        localStorage.setItem('refreshrefresh', authData.refreshToken);   
      })
      .catch(error => {
        console.log("loi")
        commit("authFailed")
      }) 
    }
  }
}

export default admin;
