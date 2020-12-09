/**
 * 发现模块的路由
 * **/
import goshopping from  './goshopping.js';
const Found = [
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
            title: '朋友圈'
        }
    },
    {
        path: '/found/scan',
        component: resolve => require(['../../components/found/scan/index.vue'], resolve),
        meta: {
            title: '扫一扫'
        }
    },
    {
        path: '/found/video',
        component: resolve => require(['../../components/found/video/index.vue'], resolve),
        meta: {
            title: '视频号'
        }
    },
    {
        path: '/found/shake',
        component: resolve => require(['../../components/found/shake/index.vue'], resolve),
        meta: {
            title: '摇一摇'
        }
    },
    {
        path: '/found/watch',
        component: resolve => require(['../../components/found/watch/index.vue'], resolve),
        meta: {
            title: '看一看'
        }
    },
    {
        path: '/found/search',
        component: resolve => require(['../../components/found/search/index.vue'], resolve),
        meta: {
            title: '搜索'
        }
    },
    {
        path: '/found/nearpeople',
        component: resolve => require(['../../components/found/nearpeople/index.vue'], resolve),
        meta: {
            title: '搜索'
        }
    },
    // {
    //     path: '/found/goshopping',
    //     component: resolve => require(['../../components/found/goshopping/index.vue'], resolve),
    //     meta: {
    //         title: '购物'
    //     }
    // },
    {
        path: '/found/game',
        component: resolve => require(['../../components/found/game/index.vue'], resolve),
        meta: {
            title: '游戏'
        }
    },
    {
        path: '/found/game/tetris',
        component: resolve => require(['../../components/found/game/tetris/index.vue'], resolve),
        meta: {
            title: '俄罗斯方块'
        }
    },
    {
        path: '/found/game/well',
        component: resolve => require(['../../components/found/game/well/index.vue'], resolve),
        meta: {
            title: '井字棋'
        }
    },
    {
        path: '/found/game/snake',
        component: resolve => require(['../../components/found/game/snake/index.vue'], resolve),
        meta: {
            title: '贪吃蛇'
        }
    },
    {
        path: '/found/game/buildBlocks',
        component: resolve => require(['../../components/found/game/buildBlocks/index.vue'], resolve),
        meta: {
            title: '积木'
        }
    },
    {
        path: '/found/game/buildBlocks',
        component: resolve => require(['../../components/found/game/kline/index.vue'], resolve),
        meta: {
            title: 'k折线图'
        }
    },
    {
        path: '/found/game/huarongdao',
        component: resolve => require(['../../components/found/test/index.vue'], resolve),
        meta: {
            title: '华容道'
        }
    },
    {
        path: '/found/game/music',
        component: resolve => require(['../../components/found/game/music/index.vue'], resolve),
        meta: {
            title: '音乐达人'
        }
    },
    {
        path: '/found/game/chess',
        component: resolve => require(['../../components/found/game/chess/index.vue'], resolve),
        meta: {
            title: 'dw象棋'
        }
    },
    {
        path: '/found/test',
        component: resolve => require(['../../components/found/test/index.vue'], resolve),
        meta: {
            title: '华容道'
        }
    },
    //购物车路由
    ...goshopping
];

export default Found;