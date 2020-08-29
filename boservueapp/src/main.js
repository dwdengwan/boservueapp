import Vue from 'vue'
import App from './App.vue'
import router from '../src/components/router'

import '../src/static/css/global.css' /*引入公共样式*/
import common from '../src/static/js/global.js' /*引入公共方法*/
import  'amfe-flexible' //引入rem

Vue.prototype.$common = common;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
