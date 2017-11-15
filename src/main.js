// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import store from './store/store'

// Vue.config.productionTip = false

// import axios from 'axios'
// Vue.prototype.$http = axios

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })


import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import store from './store/store';
import Carousel3d from 'vue-carousel-3d';

// import $ from 'jquery'
// import './../assets/css/bootstrap.min.css'  
// import './../assets/js/bootstrap.min'  


import filmDetail from './components/filmDetail';
import filmList from './components/filmList';
import HelloWorld from './components/HelloWorld';
import login from './components/login';
import homepage from './components/homepage';
import roomList from './components/roomList';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Carousel3d);

const routes = [{
  path: '/',
  component: login
},
 {
  path: '/filmList',
  component: filmList
}, {
  path: '/filmDetail',
  component: filmDetail
}, {
  path: '/HelloWorld',
  component: HelloWorld
}, {
  path: '/roomList',
  component: roomList
}, {
  path: '/homepage',
  component: homepage
}
];



const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
