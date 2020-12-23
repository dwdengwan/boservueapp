import Vue from 'vue'
import App from './App.vue'
import router from '../src/components/router'
import store from '../src/components/store/index.js'

//引入弹幕组件
// import { vueBaberrage } from 'vue-baberrage'
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage';
Vue.use(vueBaberrage);
console.log(MESSAGE_TYPE);

import Vuex from 'vuex'

Vue.use(Vuex)

import '../src/static/css/global.css' /*引入公共样式*/
import common from '../src/static/js/global.js' /*引入公共方法*/
import  'amfe-flexible' //引入rem
import Node from 'workflow-ui/src/components/Generator/node'

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件

import echartsGL from 'echarts-gl' // 引入echarts
Vue.prototype.$echartsGL = echartsGL // 引入组件（将echarts注册为全局）

Vue.component('Node', Node)


Vue.prototype.$common = common;
Vue.config.productionTip = false;

Vue.config.silent = false;//取消 Vue 所有的日志与警告。

Vue.mixin({
    //全局混入
    created(){
        let myOption = this.$options.myOption
        if (myOption) {
            console.log(myOption)
        }
    }
})

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

new Vue({
  myOption: 'hello!',
  render: h => h(App),
  router,
  store,
}).$mount('#app')
