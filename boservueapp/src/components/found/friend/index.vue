<template>
    <div class="all friend">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div class="content friend-content">
            <div class="friend-child" v-for="(friend,index) in friendData" :key="friend.id">
                <div class="friend-child-left">
                    <div class="friend-child-img" :style="{'background':$common.randomColor()}"></div>
                </div>
                <div class="friend-child-right">
                    <div class="friend-child-top" ref="childTop">
                        <span class="friend-child-name">{{friend.name}}</span>
                    </div>
                    <div class="friend-child-middle" ref="childMiddle">
                        <span class="friend-child-content">{{friend.content}}</span>
                    </div>
                    <div class="friend-child-bottom">
                        <span class="friend-child-time">{{friend.time}}</span>
                        <span class="friend-child-option" ref="childoption" @touchend="handleTouchendOption(index)">
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </span>
                        <div class="friend-child-fixed" ref="childfixed">
                            <span class="friend-fixed-supper">
                                <span class="fixed-supper"></span><span>点赞</span>
                            </span>
                                    <span class="friend-fixed-content">
                                <span class="fixed-content"></span><span>评论</span>
                            </span>
                        </div>
                    </div>
                    <div class="friend-child-supper" v-if="friend.supper !== ''">
                        <span class="friend-supper-flag"></span>
                        <span class="friend-supper-name">{{friend.supper}}</span>
                    </div>
                    <div class="friend-child-comments" v-if="friend.list.length !== 0">
                        <div class="friend-child-list" v-for="(item,index) in friend.list" :key="index" >
                            <div class="friend-child-zmj" v-for="(bitem,bindex) in item" :key="bindex">
                                <div class="friend-child-item" v-if="bitem.other == ''">
                                    <span class="friend-item-name">{{bitem.name}}</span>
                                    <span>:</span>
                                    <span>{{bitem.content}}</span>
                                </div>
                                <div class="friend-child-item" v-else-if="bitem.other !== ''">
                                    <span class="friend-item-name">{{bitem.name}}</span>
                                    <span>回复</span>
                                    <span class="friend-item-name">{{bitem.other}}</span>
                                    <span>:</span>
                                    <span>{{bitem.content}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue'
    export default {
        name: "friend",
        components:{
            goBackHeader,
        },
        data(){
            return {
                friendData:[
                    {
                        id:"10001",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。风筝放起来，来来来来，我就是一个菠菜，菜菜菜菜。。。。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶、欢欢、莹莹、妮妮、快快、乐乐、健健、康康',
                        list:[
                            [
                                {
                                    name:'贝贝',
                                    other:'',
                                    content:'go go go 一起一起。。来来来来，我是一个苹果，果果果果。。。',
                                },
                                {
                                    name:'豆豆',
                                    other:'贝贝',
                                    content:'go go go 一起一起。。来来来来，我是一根香蕉，蕉蕉蕉蕉。。。',
                                }
                            ],
                            [
                                {
                                    name:'晶晶',
                                    other:'',
                                    content:'go go go 一起一起。。',
                                },
                                {
                                    name:'豆豆',
                                    other:'晶晶',
                                    content:'go go go 一起一起。。',
                                }
                            ],
                        ],
                    },
                    {
                        id:"10002",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶',
                        list:[],
                    },
                    {
                        id:"10003",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'',
                        list:[],
                    },
                    {
                        id:"10004",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'',
                        list:[
                            [
                                {
                                    name:'贝贝',
                                    other:'',
                                    content:'go go go 一起一起。。',
                                },
                                {
                                    name:'豆豆',
                                    other:'贝贝',
                                    content:'go go go 一起一起。。',
                                }
                            ],
                            [
                                {
                                    name:'晶晶',
                                    other:'',
                                    content:'go go go 一起一起。。',
                                },
                                {
                                    name:'豆豆',
                                    other:'晶晶',
                                    content:'go go go 一起一起。。',
                                }
                            ],
                        ],
                    },
                    {
                        id:"10005",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶',
                        list:[],
                    },
                    {
                        id:"10006",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶',
                        list:[
                            [
                                {
                                    name:'贝贝',
                                    other:'',
                                    content:'go go go 一起一起。。',
                                },
                                {
                                    name:'豆豆',
                                    other:'贝贝',
                                    content:'go go go 一起一起。。',
                                }
                            ],
                            [
                                {
                                    name:'晶晶',
                                    other:'',
                                    content:'go go go 一起一起。。',
                                },
                                {
                                    name:'豆豆',
                                    other:'晶晶',
                                    content:'go go go 一起一起。。',
                                }
                            ],
                        ],
                    },
                    {
                        id:"10007",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶',
                        list:[],
                    },
                    {
                        id:"10008",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'',
                        list:[],
                    },
                    {
                        id:"10009",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'',
                        list:[
                            [
                                {
                                    name:'贝贝',
                                    other:'',
                                    content:'go go go 一起一起。。',
                                },
                                {
                                    name:'豆豆',
                                    other:'贝贝',
                                    content:'go go go 一起一起。。',
                                }
                            ],
                            [
                                {
                                    name:'晶晶',
                                    other:'',
                                    content:'go go go 一起一起。。',
                                },
                                {
                                    name:'豆豆',
                                    other:'晶晶',
                                    content:'go go go 一起一起。。',
                                }
                            ],
                        ],
                    },
                ],
            }
        },
        methods:{
            handleTouchendOption(i){
                let childFixed = document.getElementsByClassName('friend-child-fixed')[i];
                childFixed.style.display = 'flex';
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    .friend{
        width: 100%;
        background: #eee;
        .friend-content{
            width: 100%;
            height: 94%;
            overflow-y: auto;
            .friend-child{
                padding: 0 2%;
                width: 96%;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #eee;
                .friend-child-left{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding: 2% 0;
                    .friend-child-img{
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: 10px;
                        background: green;
                    }
                }
                .friend-child-right{
                    width: calc(100% - 1.2rem);
                    padding: 2% 0 2% 2%;
                    .friend-child-top{
                        font-weight: bold;
                        color: #576999;
                    }
                    .friend-child-middle{
                        color:#666;
                    }
                    .friend-child-bottom{
                        width: 100%;
                        font-size: 0.35rem;
                        color:#999;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: relative;
                        .friend-child-option{
                            width: 10%;
                            height: 0.3rem;
                            background: rgba(200,200,200,0.5);
                            border-radius: 10px;
                            ul{
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: space-around;
                                align-items: center;
                                li{
                                    background: #fff;
                                    font-weight: bold;
                                    font-size: 0.4rem;
                                    width: 0.2rem;
                                    height: 0.2rem;
                                    border-radius: 50%;
                                    display: inline-block;
                                }
                            }
                        }
                    }
                    .friend-child-supper{
                        padding: 1%;
                        background: #eee;
                        margin-top: 1%;
                        margin-bottom: 1%;
                        .friend-supper-flag{
                            width: 0.3rem;
                            height: 0.3rem;
                            border-radius: 50%;
                            background: pink;
                            display: inline-block;
                        }
                        .friend-supper-name{
                            margin-right: 1%;
                            margin-left: 1%;
                            font-weight: bold;
                            color: #576999;
                            font-size: 0.35rem;
                        }
                    }
                    .friend-child-comments{
                        background: #eee;
                        padding: 2%;
                        margin-top: 1%;
                        margin-bottom: 1%;
                        .friend-child-item{
                            font-size: 0.35rem;
                            .friend-item-name{
                                color:#576999;
                                font-weight: bold;
                            }
                        }
                    }
                }
                .friend-child-fixed{
                    position: absolute;
                    bottom: 0;
                    left: 45%;
                    width: 40%;
                    height: 0.5rem;
                    background: rgba(0,0,0,0.8);
                    /*display: flex;*/
                    justify-content: space-around;
                    align-items: center;
                    color:#fff;
                    font-size: 0.35rem;
                    border-radius: 5px;
                    display: none;
                    .friend-fixed-supper,.friend-fixed-content{
                        width: 40%;
                    }
                    .fixed-supper,.fixed-content{
                        width: 0.3rem;
                        height: 0.3rem;
                        background: pink;
                        border-radius: 50%;
                        display: inline-block;
                        margin-left: 5%;
                        margin-right: 5%;
                    }
                    .fixed-content{
                        background: #00c800;
                    }
                }
            }
        }
    }
</style>