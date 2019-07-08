import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      title: 'client 登陆'
    },
    component: r => {
      require(['./login/Login'], r)
    }
  }
]

export default new VueRouter({
  routes: routes
})
