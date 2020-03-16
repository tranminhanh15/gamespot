/*eslint-disable*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';

import Home from './components/Home';
import SignIn from './components/Signin';
import Dashboard from './components/Dashboard';
import MainDashboard from './components/Dashboard/main.vue';
import AddPosts from './components/Dashboard/addPosts.vue';
import Postslist from './components/Dashboard/listPosts.vue';
import Post from './components/Post'

Vue.use(VueRouter);

const authGuard = {
  beforeEnter: (to, from, next) => {
    if(store.state.admin.token){
      next()
    } else {
      next('/')
    }
  }
}

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/signin", name: "SignIn", component: SignIn},
  {path: "/dashboard", name: "Dashboard", component: Dashboard, children: [
    {path: '', component: MainDashboard},
    {path: 'posts_lists', component: Postslist},
    {path: 'add_posts', component: AddPosts},
  ], ...authGuard},
  {path: "/post/:id", name: "Post", component: Post}
]

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(){
    return {x:0, y:0}
  }
})
