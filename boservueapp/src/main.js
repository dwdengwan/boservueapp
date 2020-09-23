import Vue from 'vue'
import App from './App.vue'
import router from '../src/components/router'
import store from '../src/components/store/index.js'

import Vuex from 'vuex'

Vue.use(Vuex)

import '../src/static/css/global.css' /*引入公共样式*/
import common from '../src/static/js/global.js' /*引入公共方法*/
import  'amfe-flexible' //引入rem

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件

Vue.prototype.$common = common;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
