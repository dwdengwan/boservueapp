/**
 * 发现模块的路由
 * **/
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
        path: '/found/shake',
        component: resolve => require(['../../components/found/shake/index.vue'], resolve),
        meta: {
            title: '摇一摇'
        }
    },
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
        path: '/found/test',
        component: resolve => require(['../../components/found/test/index.vue'], resolve),
        meta: {
            title: '华容道'
        }
    },
];

export default Found;