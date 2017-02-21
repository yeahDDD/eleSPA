// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */
const router = new VueRouter({
  routes: [
         { path: '/goods', component: goods },
         { path: '/ratings', component: ratings },
         { path: '/seller', component: seller }
  ],
  linkActiveClass: 'active'
});
 new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
router.push({path: '/goods'});
