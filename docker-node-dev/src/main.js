import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

Vue.prototype.$userInfo = {
  a: 1,
  b: 2
}


// store.commit('setUserInfo', Vue.prototype.userInfo)
store.dispatch('getUserInfo')
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
