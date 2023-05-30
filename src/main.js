import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css';
import VueContextMenu from 'vue-contextmenu'
import WebSql from "@/websql/websql";


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueContextMenu)
Vue.use(WebSql)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')