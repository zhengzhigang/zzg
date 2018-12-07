import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import MyPlugin from '@/plugin'
Vue.component('v-icon', Icon)

Vue.config.productionTip = false
Vue.use(MyPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
