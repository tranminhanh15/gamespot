import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import SignIn from './components/Signin'

Vue.use(VueRouter);

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/signin", name: "SignIn", component: SignIn},
]

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(){
    return {x:0, y:0}
  }
})
