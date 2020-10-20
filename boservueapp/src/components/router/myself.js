/**
 * 我模块的路由
 * **/
const Myslef = [
    {
        path: '/myself',
        component: resolve => require(['../../components/myself/index.vue'], resolve),
        meta: {
            title: '自己'
        }
    },
];

export default Myslef;