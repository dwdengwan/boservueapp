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
                title: '朋友圈'
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
            path: '/found/test',
            component: resolve => require(['../../components/found/test/index.vue'], resolve),
            meta: {
                title: '华容道'
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