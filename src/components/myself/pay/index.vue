<template>
    <div class="all pay">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div class="pay-content content">

        </div>
        <div class="pay-fixed">
            <div class="pay-fixed-top" @click="handlegoback">
                <div class="pay-ftop-title">Please enter your password</div>
            </div>
            <div class="pay-fixed-bottom">
                <div class="pay-fbottom-child" v-for="(item,index) in bottomData" :key="index">
                    <div class="pay-fbottom-child0">
                        <div class="pay-fbottom-child1">

                            <div class="pay-fbottom-child2"
                                 @touchstart='handleTouchStart()'
                                 @touchmove="handleTouchMove()"
                                 @touchend="handleTouchEnd(index)">
                                <div class="pay-fbottom-child3"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "setting",
        components:{
            goBackHeader
        },
        data(){
            return {
                bottomData:[{},{},{},{},{},{},{},{},{},],
                timeOutEvent:null,
                longClick:0,
            }
        },
        methods:{
            handlegoback(){
                this.$router.go(-1)
            },
            handleTouchStart(){
                this.longClick=0;//设置初始为0
                this.timeOutEvent = setTimeout(()=>{
                    //此处为长按事件-----在此显示遮罩层及删除按钮
                    this.longClick=1;//假如长按，则设置为1
                },300);
            },
            handleTouchMove(){
                clearTimeout(this.timeOutEvent);
                this.timeOutEvent = 0;
            },
            handleTouchEnd(i){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击
                    console.log(i+'click')
                } else {
                    //长按事件
                    console.log(i+'dbclick')
                }
                return false;
            },
        },
        mounted(){

        },
        created(){

        }
    }
</script>

<style scoped lang="less">
    .pay{
        width: 100%;
        position: relative;
        .pay-fixed{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            top: 0;
            left: 0;
            .pay-fixed-top{
                height: 15%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.6rem;
                font-weight: bolder;
                border-bottom: 2px solid var(--font-color);
            }
            .pay-fixed-bottom{
                height: calc(85% - 2px);
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                .pay-fbottom-child{
                    width: 33%;
                    height: 33%;
                    /*background-color: #ff6855;*/
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .pay-fbottom-child0{
                        width: 2.2rem;
                        height: 2.2rem;
                        border-radius: 50%;
                        background-color: var(--font-color);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        /*visibility: hidden;*/
                        .pay-fbottom-child1{
                            width: 1.8rem;
                            height: 1.8rem;
                            border-radius: 50%;
                            background-color: #fff;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            /*visibility: hidden;*/
                            .pay-fbottom-child2{
                                width: 0.6rem;
                                height: 0.6rem;
                                border-radius: 50%;
                                background-color: var(--font-color);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                visibility: visible;
                                .pay-fbottom-child3{
                                    width: 0.3rem;
                                    height: 0.3rem;
                                    border-radius: 50%;
                                    background-color: #fff;
                                    visibility: visible;
                                }
                            }
                        }
                    }
                }
            }
        }
        .pay-content{

        }
    }
</style>