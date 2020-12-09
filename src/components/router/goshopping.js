/**
 * 发现模块下的购物的路由
 * **/
const goshopping = [
    {
        path: '/found/goshopping',
        component: resolve => require(['../../components/found/goshopping/index.vue'], resolve),
        meta: {
            title: '购物'
        },
        children:[
            {
                path: '',
                component: resolve => require(['../../components/found/goshopping/homePage/index.vue'], resolve),
                meta: {
                    title: '购物'
                },
            },
            {
                path: 'class',
                component: resolve => require(['../../components/found/goshopping/class/index.vue'], resolve),
                meta: {
                    title: '分类'
                },
            },
            {
                path: '',
                component: resolve => require(['../../components/found/goshopping/index.vue'], resolve),
                meta: {
                    title: '直播'
                },
            },
            {
                path: '',
                component: resolve => require(['../../components/found/goshopping/index.vue'], resolve),
                meta: {
                    title: '购物车'
                },
            },
            {
                path: '',
                component: resolve => require(['../../components/found/goshopping/index.vue'], resolve),
                meta: {
                    title: '我的'
                },
            },
        ]
    },
];

export default goshopping;