/*eslint-disable*/
import Vue from 'vue';
import router from '../../router'

const posts = {
    namespaced: true,
  state: {
    posts: [
    //   {
    //       id:'1',
    //       img:'1.jpg',
    //       game:'Red dead redemption',
    //       title:'Lorem ipsum dolor sit amet',
    //       description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiti',
    //       content:'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //       rating:5,
    //       date:'nov-28'
    //   },
    //   {
    //       id:'2',
    //       img:'2.jpg',
    //       game:'Red dead redemption',
    //       title:'Lorem ipsum dolor sit amet',
    //       description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiti',
    //       content:'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //       rating:5,
    //       date:'nov-28'
    //   },
    //   {
    //       id:'3',
    //       img:'3.jpg',
    //       game:'Red dead redemption',
    //       title:'Lorem ipsum dolor sit amet',
    //       description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiti',
    //       content:'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //       rating:5,
    //       date:'nov-28'
    //   },
    //   {
    //       id:'4',
    //       img:'1.jpg',
    //       game:'Red dead redemption',
    //       title:'Lorem ipsum dolor sit amet',
    //       description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiti',
    //       content:'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //       rating:5,
    //       date:'nov-28'
    //   },
    //   {
    //       id:'5',
    //       img:'2.jpg',
    //       game:'Red dead redemption',
    //       title:'Lorem ipsum dolor sit amet',
    //       description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiti',
    //       content:'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //       rating:5,
    //       date:'nov-28'
    //   },
    //   {
    //       id:'6',
    //       img:'3.jpg',
    //       game:'Red dead redemption',
    //       title:'Lorem ipsum dolor sit amet',
    //       description:'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiti',
    //       content:'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //       rating:5,
    //       date:'nov-28'
    //   },
  ]
  },

  getters: {
  },
  
  mutations: {
    addPost(state, data){
        console.log(state.posts.length + 1)
        const id = state.posts.length + 1;
        const time = new Date();
        const day = time.getDate();
        const month = new Intl.DateTimeFormat('en-US', { month: 'short'}).format(time)
        const date = day + "-" + month;
        const newAddPost = {
            ...data,
            id,
            date
        }
        state.posts = [...state.posts, newAddPost]
        router.push('/')
    },
    handleDelete(state, id){
        const findData = state.posts.filter(item => {
            return item.id !== id
        })
        state.posts = [...findData];
    }
  },

  actions: {

  }
}

export default posts
