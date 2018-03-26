import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import InTheater from './components/intheater.vue'
import ComingSoon from './components/comingsoon.vue'
import Search from './components/search.vue'
import Top250 from './components/top250.vue'
Vue.use(VueRouter);

import List from "./components/list.vue";
Vue.component("list", List);

let router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: { name: "intheater" }
    },
    {
      name: "intheater",
      path: "/in_theaters",
      component: InTheater
    },
    {
      name: "comingsoon",
      path: "/coming_soon",
      component: ComingSoon
    },
    {
      name: "search",
      path: "/search",
      component: Search
    },
    {
      name: "top250",
      path: "/top250",
      component: Top250
    },
  ]
});

import Axios from 'axios';
Vue.prototype.$ajax = Axios;

import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
