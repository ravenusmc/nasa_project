import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts';
import router from './router'
import store from './store'
import moment from 'moment'

Vue.config.productionTip = false

// Google charts plugin
Vue.use(VueGoogleCharts);

Vue.use(moment);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
