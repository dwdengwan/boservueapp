/**
 * 我模块的路由
 * **/
import component from './component'
const Myslef = [
    {
        path: '/myself',
        component: resolve => require(['../../components/myself/index.vue'], resolve),
        meta: {
            title: '自己'
        }
    },
    {
        path: '/myself/pay',
        component: resolve => require(['../../components/myself/pay/index.vue'], resolve),
        meta: {
            title: '支付'
        }
    },
    {
        path: '/myself/setting',
        component: resolve => require(['../../components/myself/setting/index.vue'], resolve),
        meta: {
            title: '设置'
        }
    },
    {
        path: '/myself/security',
        component: resolve => require(['../myself/setting/security/index.vue'], resolve),
        meta: {
            title: '账号与安全'
        }
    },
    {
        path: '/myself/security/password',
        component: resolve => require(['../myself/setting/security/password.vue'], resolve),
        meta: {
            title: '手势密码设置'
        }
    },
    {
        path: '/myself/security/navbarone',
        component: resolve => require(['../myself/setting/security/navbarone.vue'], resolve),
        meta: {
            title: '导航栏一'
        }
    },
    {
        path: '/myself/security/navbartwo',
        component: resolve => require(['../myself/setting/security/navbartwo.vue'], resolve),
        meta: {
            title: '导航栏二'
        }
    },
    {
        path: '/myself/setting/changeBgColor',
        component: resolve => require(['../../components/myself/setting/changeBgColor/index.vue'], resolve),
        meta: {
            title: '更换主题'
        }
    },
    ...component
];

export default Myslef;