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
                 @touchstart="handleTouchStart(found,index,$event)"
                 @touchend.stop="handleClickBack(found)">
                <div class="found-child-content">
                    <div class="found-child-left">
                        <div class="found-child-img" :style="{'background':$common.randomColor()}"></div>
                        <div class="found-child-name">
                            {{found.name}}
                        </div>
                    </div>
                    <div class="found-child-right">
                        <div class="found-child-img" v-if="index < 2" :style="{'background':$common.randomColor()}" ></div>
                        <div class="found-child-back"></div>
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
                        path:'/found/video',
                    },
                    {
                        name:"扫一扫",
                        id:'10003',
                        iskongge:'0',
                        path:'/found/scan',
                    },
                    {
                        name:"摇一摇",
                        id:'10004',
                        iskongge:'1',
                        path:'/found/shake',
                    },
                    {
                        name:"看一看",
                        id:'10005',
                        iskongge:'0',
                        path:'/found/watch',
                    },
                    {
                        name:"搜一搜",
                        id:'10006',
                        iskongge:'1',
                        path:'/found/search',
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
                        path:'/found/goshopping',
                    },
                    {
                        name:"游戏",
                        id:'10009',
                        iskongge:'1',
                        path:'/found/game',
                    },
                    {
                        name:"小程序",
                        id:'10010',
                        iskongge:'1',
                        path:'/found',
                    },
                    {
                        name:"测试",
                        id:'10011',
                        iskongge:'1',
                        path:'/found/test',
                    },
                ],
                longClick:0,
                timeOutEvent:0,
            }
        },
        methods:{
            handleTouchStart(){
                this.longClick=0;//设置初始为0
                this.timeOutEvent = setTimeout(()=>{
                    //此处为长按事件-----在此显示遮罩层及删除按钮
                    this.longClick=1;//假如长按，则设置为1
                },300);
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
            handleClickBack(item){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击事件
                    let path = item.path;
                    let query = {
                        name : item.name
                    }
                    this.$router.push({path,query})
                }
            }
        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    .found{
        width: 100%;
        .found-content{
            .found-child{
                .found-child-content{
                    padding: 2%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 96%;
                    border-bottom: 1px solid #eee;
                    border-top: 1px solid #eee;
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
                        .found-child-back{
                            width: 0.25rem;
                            height: 0.25rem;
                            border-top: 2px solid var(--font-color);
                            border-right: 2px solid var(--font-color);
                            transform: rotate(45deg);
                            display: inline-block;
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