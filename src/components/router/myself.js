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
        path: '/myself/setting',
        component: resolve => require(['../../components/myself/setting/index.vue'], resolve),
        meta: {
            title: '设置'
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