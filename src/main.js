import Vue from 'vue'
import App from './App.vue'
import PrismicVue from 'prismic-vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: 'https://lachapelle.prismic.io/api/v2'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
