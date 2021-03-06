import 'whatwg-fetch';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';


Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   component: Index,
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
