import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Illnesses from './components/Illnesses.vue'
import Hospitals from './components/Hospitals.vue'
import PainScale from './components/PainScale.vue'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Illnesses },
  { path: '/pain', component: PainScale },
  { path: '/hospitals', component: Hospitals }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
