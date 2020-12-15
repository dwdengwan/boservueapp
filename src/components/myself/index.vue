<template>
    <!--@touchstart="handleTouchStart"-->
    <!--@touchmove="handleTouchMove"-->
    <!--@touchend="handleTouchEnd"-->
    <div class="all myself">
        <div class="header myself-header">
            <header-html></header-html>
        </div>
        <div class="content myself-content">
            <div class="myself-first-child">
                <div class="myself-first-left">
                    <div class="myself-first-img"></div>
                    <div class="myself-first-info">
                        <div class="myself-first-name">dw</div>
                        <div class="myself-first-nicheng">
                            <span class="myself-first-wechat">微信号：</span>
                            <span class="myself-first-wechatcode">ANG19491096E</span>
                        </div>
                    </div>
                </div>
                <div class="myself-first-right">
                    <div class="myself-first-erweima" @touchend="handleClick($event)"></div>
                    <div class="myself-first-back"></div>
                </div>
            </div>
            <div class="myself-kongge"></div>
            <goToNext :myselfData="myselfData"></goToNext>
        </div>
        <div class="myself-fixed" :class="!active?'active':''" @touchend="handleClickFixed">
            <div class="myself-fixed-child"></div>
        </div>
        <div class="footer myself-footer">
            <footer-html></footer-html>
        </div>
    </div>
</template>

<script>
    import footerHtml from '../common/footerHtml';
    import headerHtml from '../common/headerHtml';
    import goToNext from '../common/goToNext';

    export default {
        name: "myself",
        components:{
            footerHtml,headerHtml,goToNext
        },
        data(){
            return {
                myselfData:[
                    {
                        name:"支付",
                        id:'10002',
                        iskongge:'1',
                        url:"/myself/pay",
                    },
                    {
                        name:"收藏",
                        id:'10003',
                        iskongge:'0',
                        url:"/myself/collection",
                    },
                    {
                        name:"相册",
                        id:'10004',
                        iskongge:'0',
                        url:"/myself",
                    },
                    {
                        name:"卡包",
                        id:'10005',
                        iskongge:'0',
                        url:"/myself",
                    },
                    {
                        name:"表情",
                        id:'10006',
                        iskongge:'1',
                        url:"/myself",
                    },
                    {
                        name:"设置",
                        id:'10007',
                        iskongge:'1',
                        url:"/myself/setting",
                    }
                ],
                active:false,
            }
        },
        methods:{
            handleTouchStart(){

            },
            handleTouchMove(){
                let params = {
                    that:this,
                    nowNum:3,
                }
                this.$store.commit('moveLeftRight',params)
            },
            handleTouchEnd(){
                this.$store.state.countNum = 0;
            },
            handleClick(e){
                e.stopPropagation()
                this.active = true;
            },
            handleClickFixed(){
                this.active = false;
            },
        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
.myself{
    width: 100%;
    position: relative;
    .myself-content{
        width: 100%;
        .myself-first-child{
            padding: 4% 2% 4% 4%;
            border-top: 1px solid #eee;
            width: 94%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .myself-first-left{
                width: 90%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .myself-first-img{
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 12px;
                    background: green;
                }
                .myself-first-info{
                    width: calc(100% - 1.5rem);
                    padding:0 3%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .myself-first-name{
                        margin-bottom: 3%;
                        font-size: 0.6rem;
                        font-weight: bold;
                        color:#333;
                    }
                    .myself-first-nicheng{
                        margin-top: 3%;
                        color:#cdcdcd;
                        font-size: 0.35rem;
                    }
                }
            }
            .myself-first-right{
                width: 10%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .myself-first-erweima{
                    width: 0.6rem;
                    height: 0.6rem;
                    background: aqua;
                    border-radius: 6px;
                }
                .myself-first-back{
                    width: 0.25rem;
                    height: 0.25rem;
                    border-top: 2px solid var(--font-color);
                    border-right: 2px solid var(--font-color);
                    transform: rotate(45deg);
                    display: inline-block;
                }
            }
        }
        .myself-kongge{
            width: 100%;
            height: 0.4rem;
            background: #eee;
        }
    }
    .myself-fixed{
        position: absolute;
        top: 6%;
        left: 0;
        width: 100%;
        height: 84%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        .myself-fixed-child{
            width: 40%;
            height: 40%;
            background: #fff;
        }
    }
    .myself-fixed.active{
        display: none;
    }
}
</style>