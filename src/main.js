import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Contacto from './Contacto.vue';
import Home from './Home.vue';
// import bootstrap from 'bootstrap';

Vue.use(VueRouter);
const routes = [
{path:'/contacto',component:Contacto},
{path:'/home',component:Home},
{path:'/',component:Home}
];

const router = new VueRouter({
	routes,
	mode:'history'
});

Vue.component('home',Home);
Vue.component('contacto',Contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
