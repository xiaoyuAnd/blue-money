import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/views/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Vuex from 'vuex';


Vue.config.productionTip = false;
// 全局引入nav
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

Vue.use(Vuex);

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};



if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开本页面，以保证浏览效果 。 或者pc端打开检查，切换手机端观看')
  const img = document.createElement('img')
  img.src = "./1.png"
  img.style.position = 'fixed'
  img.style.left = '50%'
  img.style.top = '50%'
  img.style.height = '200px'
  img.style.width = '200px'
  img.style.transform = 'translate(-50%,-50%)'
  img.style.boxShadow = '0 0 18px rgba(0,0,0,0.25)'
  document.body.appendChild(img)
}

  // window.onload=function(){
  //           if(document.body.scrollTop>0){
  //               console.log(1);
  //               window.scrollTo(0,-1);
  //               document.body.scrollTop=0;
  //           }
  //           window.scrollTo(0,-1);
  //           document.body.scrollTop=0;
  //       }