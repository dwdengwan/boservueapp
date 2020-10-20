import Vue from 'vue';
import Router from 'vue-router';
import Found from  './found.js';
import Myself from  './myself.js';

Vue.use(Router)

 let homeRouter = new Router({
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
                title: '聊天主界面',
                isWeChat:true,
            }
        },
        {
            path: '/notfound',
            component: resolve => require(['../../components/common/notfound.vue'], resolve),
            meta: {
                title: '未登录',
            }
        },
        {
            path: '/addrbook',
            component: resolve => require(['../../components/addrbook/index.vue'], resolve),
            meta: {
                title: '通讯录'
            }
        },
        ...Found,
        ...Myself,
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

//路由守卫 进入聊天页面前判断是否登录
homeRouter.beforeEach((to, from, next) => {
    let {
        // title,
        isWeChat
    } = to.meta;
    let flag = parseInt(sessionStorage.getItem('login'));
    if (isWeChat && !flag) {
        next({
            path: '/notfound',
            query:{
                type:'0',
            }
        })
    } else {
        next();
    }
})
export default homeRouter