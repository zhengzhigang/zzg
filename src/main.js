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

// 登录拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requirePath) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          rediret: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
