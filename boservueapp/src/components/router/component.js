/**
 * 我下的收藏模块
 * */
const Component = [
    {
        path: '/myself/collection',
        component: resolve => require(['../../components/myself/collection/index.vue'], resolve),
        meta: {
            title: '收藏'
        },
    },
    {
        path: '/myself/collection/button',
        component: resolve => require(['../../components/myself/collection/basis/button.vue'], resolve),
        meta: {
            title: 'button'
        },
    },
    {
        path: '/myself/collection/loading',
        component: resolve => require(['../../components/myself/collection/basis/loading.vue'], resolve),
        meta: {
            title: 'loading'
        },
    },
]

export default Component;