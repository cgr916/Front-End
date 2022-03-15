// 引入相关的库文件
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import Vuex from "vuex"

// 引入自定义的文件
import router from './router'
import TypeNav from './components/TypeNav/TypeNav.vue'

// 相关设置
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component(TypeNav.name,TypeNav)



// Vue实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
