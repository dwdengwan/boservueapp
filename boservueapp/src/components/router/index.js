import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/index',
            component: resolve => require(['../../components/login/index.vue'],resolve),
            meta:{
                title:'首页'
            },
            children:[
                {
                    path: '/index',
                    component: resolve => require(['../../components/login/index.vue'], resolve),
                    meta: {
                        title: '首页'
                    }
                },
            ],
        },
        {
            path: '/wechat',
            component: resolve => require(['../../components/common/wechat.vue'], resolve),
            meta: {
                title: '聊天主界面'
            }
        },
        {
            path: '/addrbook',
            component: resolve => require(['../../components/addrbook/index.vue'], resolve),
            meta: {
                title: '通讯录'
            }
        },
        {
            path: '/found',
            component: resolve => require(['../../components/found/index.vue'], resolve),
            meta: {
                title: '发现'
            }
        },
        {
            path: '/found/friend',
            component: resolve => require(['../../components/found/friend/index.vue'], resolve),
            meta: {
                title: '发现'
            }
        },
        {
            path: '/myself',
            component: resolve => require(['../../components/myself/index.vue'], resolve),
            meta: {
                title: '自己'
            }
        },
        {
            path: '/search',
            component: resolve => require(['../../components/otherUntil/search.vue'], resolve),
            meta: {
                title: '搜索'
            }
        },
    ],
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}