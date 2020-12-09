<template>
    <div class="all game">
        <div class="header game-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content game-content">
            <div class="game-content-child"
                 v-for="(item,index) in gameData"
                 :key="index"
                 @touchend.stop="handleGoBack(item)">
                <span class="game-child-img" :style="{background:$common.randomColor()}"></span>
                <span class="game-name">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "index",
        components:{
            goBackHeader,
        },
        data(){
            return {
                gameData:[
                    {
                        name:"井子棋",
                        id:"10006",
                        path:"/found/game/well"
                    },
                    {
                        name:"华容道",
                        id:"10003",
                        path:"/found/game/huarongdao"
                    },
                    {
                        name:"俄罗斯方块",
                        id:"10001",
                        path:"/found/game/tetris"
                    },
                    {
                        name:"贪吃蛇",
                        id:"10002",
                        path:"/found/game/snake"
                    },
                    {
                        name:"积木",
                        id:"10004",
                        path:"/found/game/buildBlocks"
                    },
                    {
                        name:"k折线图",
                        id:"10005",
                        path:"/found/game/kline"
                    },
                    {
                        name:"音乐达人",
                        id:"10007",
                        path:"/found/game/music"
                    },
                    {
                        name:"dw象棋",
                        id:"10008",
                        path:"/found/game/chess"
                    },
                ]
            }
        },
        methods:{
            handleGoBack(item){
                let query = {
                    name : item.name
                }
                this.$router.push({path:item.path,query})
            }
        }
    }
</script>

<style scoped lang="less">
    .game-content{
        height: 94%;
        .game-content-child{
            margin: 0 0 2% 0;
            /*background-color: #27e38b;*/
            background-color: rgba(39,227,139,0.4);
            color:#fff;
            width: 96%;
            padding: 2%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .game-child-img{
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 10px;
                background: green;
                display: inline-block;
            }
            .game-name{
                font-size: 0.4rem;
                padding: 0 2%;
            }
        }
    }
</style>