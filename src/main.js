import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "./style/base.css"

import router from './router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
