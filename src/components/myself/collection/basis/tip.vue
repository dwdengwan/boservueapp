<template>
    <div class="tip2 all">
        <div class="header tip2-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content tip2-content">
            <div class="tip2-content-top">
                <div class="tip2-top-content">
                    <span>left</span>
                    <span>music</span>
                    <span>seach</span>
                </div>
            </div>
            <div class="tip2-content-bottom content">
                <div class="tip2-bottom-content" v-for="(item,index) in tipData" :key="index" :style="{'background-color':$common.randomColor()}">{{item.name}}</div>
            </div>
            <div class="tip2-fixed" v-show="false">

            </div>
            <div class="tip2-password">
                <div class="tip2-password-content">
                    <div class="tip2-password-top">Please enter your password</div>
                    <div class="tip2-password-bottom">
                        <div class="tip2-password-bottomc" v-for="(item,index) in bottomData" :key="index">
                            <div class="tip2-password-bottomc-cirle">
                                <div class="tip2-password-bottomc-cirlec"></div>
                            </div>
                            <div class="tip2-password-bottomcfixed"></div>
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
        name: "tip2",
        components:{
            goBackHeader
        },
        data(){
            return{
                tipData:[
                    {
                        name:'爵士',
                    },
                    {
                        name:"轻奢"
                    },
                    {
                        name:"豪华"
                    },
                    {
                        name:'爵士',
                    },
                    {
                        name:"轻奢"
                    },
                    {
                        name:"豪华"
                    }
                ],
                bottomData:[{},{},{},{},{},{},{},{},{},],
            }
        }
    }
</script>

<style scoped lang="less">
    .tip2{
        .tip2-content{
            height: 94%;
            overflow-y: auto;
            position: relative;
            .tip2-content-top{
                height: 10%;
                background-color: #418045;
                display: flex;
                justify-content: center;
                align-items: center;
                .tip2-top-content{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    color: #fff;
                }
            }
            .tip2-content-bottom{
                height: 90%;
                overflow-y: auto;
                background-color: gold;
                .tip2-bottom-content{
                    height: 45%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color:#fff;
                }
            }
            .tip2-fixed{
                position: absolute;
                width: 20%;
                height: 100%;
                background-color: #971126;
                top: 0;
                left: 0;
            }
            .tip2-password{
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.8);
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                .tip2-password-content{
                    width: 80%;
                    height: 80%;
                    background: #eee;
                    .tip2-password-top{
                        height: 15%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-bottom: 1px solid var(--font-color);
                    }
                    .tip2-password-bottom{
                        height: 85%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-direction: row;
                        flex-wrap: wrap;
                        .tip2-password-bottomc{
                            width: 33%;
                            height: 33%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                            .tip2-password-bottomc-cirle{
                                width: 0.4rem;
                                height: 0.4rem;
                                border-radius: 50%;
                                background-color: var(--main-bg-color);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                .tip2-password-bottomc-cirlec{
                                    width: 0.3rem;
                                    height: 0.3rem;
                                    border-radius: 50%;
                                    background-color: #eee;
                                }
                            }
                            .tip2-password-bottomcfixed{
                                position: absolute;
                                width: 2.2rem;
                                height: 2.2rem;
                                border-radius: 50%;
                                background-color: #418045;
                                top: calc((100% - 2.2rem)/2);
                                left: calc((100% - 2.2rem)/2);
                                z-index: 1;
                            }
                        }
                    }
                }
            }
        }
    }
</style>