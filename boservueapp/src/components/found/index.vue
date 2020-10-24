<template>
    <!--@touchstart="handleTouchStart"-->
    <!--@touchmove="handleTouchMove"-->
    <!--@touchend="handleTouchEnd"-->
    <div class="all found">
        <div class="header found-header">
            <header-html></header-html>
        </div>
        <div class="content found-content">
            <div class="found-child"
                 v-for="(found,index) in foundData"
                 :key="found.id"
                 @click="handleClickBack(found.path)">
                <div class="found-child-content">
                    <div class="found-child-left">
                        <div class="found-child-img" :style="{'background':$common.randomColor()}"></div>
                        <div class="found-child-name">
                            {{found.name}}
                        </div>
                    </div>
                    <div class="found-child-right">
                        <div class="found-child-img" v-if="index < 2" :style="{'background':$common.randomColor()}" ></div>
                        <div class="found-child-back">&gt;</div>
                    </div>
                </div>
                <div class="found-kongge" v-if="found.iskongge == '1'"></div>
            </div>
        </div>
        <div class="footer found-footer">
            <footer-html></footer-html>
        </div>
    </div>
</template>

<script>
    import footerHtml from '../common/footerHtml';
    import headerHtml from '../common/headerHtml';
    export default {
        name: "found",
        components:{
            footerHtml,headerHtml
        },
        data(){
            return {
                foundData:[
                    {
                        name:"朋友圈",
                        id:'10001',
                        iskongge:'1',
                        path:'/found/friend',
                    },
                    {
                        name:"视频号",
                        id:'10002',
                        iskongge:'1',
                        path:'/found',
                    },
                    {
                        name:"扫一扫",
                        id:'10003',
                        iskongge:'0',
                        path:'/found',
                    },
                    {
                        name:"摇一摇",
                        id:'10004',
                        iskongge:'1',
                        path:'/found',
                    },
                    {
                        name:"看一看",
                        id:'10005',
                        iskongge:'0',
                        path:'/found',
                    },{
                        name:"搜一搜",
                        id:'10006',
                        iskongge:'1',
                        path:'/found',
                    },
                    {
                        name:"附近的人",
                        id:'10007',
                        iskongge:'1',
                        path:'/found',
                    },
                    {
                        name:"购物",
                        id:'10008',
                        iskongge:'0',
                        path:'/found',
                    },
                    {
                        name:"游戏",
                        id:'10009',
                        iskongge:'1',
                        path:'/found',
                    },
                    {
                        name:"小程序",
                        id:'10010',
                        iskongge:'1',
                        path:'/found',
                    },


                ],
            }
        },
        methods:{
            handleTouchStart(){

            },
            handleTouchMove(){
                let params = {
                    that:this,
                    nowNum:2,
                }
                this.$store.commit('moveLeftRight',params)
            },
            handleTouchEnd(){
                this.$store.state.countNum = 0;
            },
            handleClickBack(path){
                let query = {}
                this.$router.push({path,query})
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    .found{
        width: 100%;
        background: #eee;
        .found-content{
            .found-child{
                .found-child-content{
                    padding: 2%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 96%;
                    border-bottom: 1px solid #eee;
                    .found-child-left{
                        width: 50%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .found-child-img{
                            width: 1.2rem;
                            height: 1.2rem;
                            border-radius: 10px;
                            background: green;
                        }
                        .found-child-name{
                            margin-left: 5%;
                            margin-right: 5%;
                        }
                    }
                    .found-child-right{
                        font-size: 0.5rem;
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        .found-child-img{
                            width: 0.8rem;
                            height: 0.8rem;
                            border-radius: 6px;
                            background: green;
                            margin-left: 5%;
                            margin-right: 5%;
                        }
                    }
                }
                .found-kongge{
                    width: 100%;
                    height: 0.4rem;
                    background: #eee;
                }
            }
        }
    }
</style>