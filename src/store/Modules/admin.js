/*eslint-disable*/
import Vue from 'vue';
import router from "../../router";

const FbAuth = "https://identitytoolkit.googleapis.com/v1/accounts:";
const FbApikey = "AIzaSyDALesIoKb0fBQG4uJAy0AqTiNf1lZ7USM";

const admin = {
  namespaced: true,
  state: {
    token: null,
    refresh: null,
    authFailed: false,
    refreshLoading: true
  },
  getters: {
    isAuth(state){
      if(state.token) {return true}
      return false
    },
  },
  mutations: {
    authUser(state, payload){
      state.token = payload.idToken;
      state.refresh = payload.refreshToken;
      if(payload.type === "signin"){
        router.push('/dashboard');
      }
    },
    authFailed(state, type){
      if(type === 'reset'){
        console.log("hello")
      } else {
        state.authFailed = true;
        setTimeout(()=>{state.authFailed = false}, 3000)
      }
    },
    logoutUser(state){
      state.token = '';
      state.refresh = '';
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      router.push("/")
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
        if(payload.check){
        localStorage.setItem('token', authData.idToken);
        localStorage.setItem('refresh', authData.refreshToken);   
        }
        
      })
      .catch(error => {
        console.log("loi")
        commit("authFailed")
      }) 
    },
    refreshToken({commit}){
       const refreshToken = localStorage.getItem("refresh");

       if(refreshToken){
         Vue.http.post(`https://securetoken.googleapis.com/v1/token?key=${FbApikey}`, {
          grant_type: "refresh_token",
          refresh_token: refreshToken
         })
         .then(response => response.json())
         .then(authData => {
           commit('authUser', {
            idToken: authData.id_token,
            refreshToken: authData.refresh_token,
            type: "refresh"
           })
           localStorage.setItem('token', authData.id_token);
           localStorage.setItem('refresh', authData.refresh_token);   
         })
       }
    }
  }
}

export default admin;
