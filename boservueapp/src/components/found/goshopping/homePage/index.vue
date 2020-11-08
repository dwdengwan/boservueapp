<template>
    <div
        class="all homepage"
        ref="homepage"
        @scroll="handleScroll"
        @touchstart="handleTouchStart"
         @touchend.stop="handleClickBack">
        <!--v-show="notop"-->
        <div
            :class="notop ? 'notop' : ''"
            class="header goshopping-header">
            <go-back-header result="goshopping"></go-back-header>
        </div>
        <div class="header goshopping-search">
            <!--<input type="text" v-focus>-->
            <div class="goshopping-search-input"></div>
            <div class="goshopping-search-btn">search</div>
        </div>
        <div
            :class="notop ? 'notop' : ''"
            class="goshopping-content">
            <div class="goshopping-content-header">
                <div class="content-right">
                    精选
                </div>
                <div class="content content-middle">
                    <div class="content-child" v-for="(title,index) in headerTitle" :key="index">
                        精选精品
                    </div>
                </div>
                <div class="content-left">
                    双11
                </div>
            </div>
            <div class="goshopping-content-middle content">
                <div class="middle-top">
                    <div class="middle-top-t">
                        <div class="middle-lunbo">
                            <div
                                 v-show="lunboIndex == index"
                                :style="{'background':$common.randomColor()}"
                                class="middle-lunbo-pic"
                                v-for="(lunbo,index) in lunboData"
                                :key="index">
                                轮播图{{index}}
                            </div>
                        </div>
                        <div class="middle-indicator">
                             <div
                                 class="middle-indicator-child"
                                 v-for="(lunbo,index) in lunboData"
                                 :key="index">
                             </div>
                        </div>
                    </div>
                    <div class="middle-top-m">
                        <div
                            class="middle-top-m1 content"
                            @scroll.stop="handleScrollLunbo2"
                            ref="lunbo2">
                            <div
                                class="middle-top-m1-child"
                                v-for="(lunbo2,index) in lunboData2"
                                :key="index"
                                ref="lunbo2child">
                                <div class="middle-top-m1-cc">
                                    <div class="middle-top-cc-pic"></div>
                                    <div class="middle-top-cc-title">aa{{index}}</div>
                                </div>
                                <div class="middle-top-m1-cc">
                                    <div class="middle-top-cc-pic"></div>
                                    <div class="middle-top-cc-title">bb{{index}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="middle-top-m2">
                            <div class="middle-top-m2-child">
                                <div class="middle-top-m2-cfixed" :style="{'left':cfixedWidth+'%'}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="middle-top-b">
                        <div class="middle-top-bf">
                            <div class="middle-top-bcc">qqqq</div>
                        </div>
                    </div>
                </div>
                <div class="middle-m">
                    <div class="middle-m-top">
                        <span class="middle-m-top-right">今日必拼</span>
                        <span class="middle-m-top-left">
                            <span>更多</span>
                            <span></span>
                        </span>
                    </div>
                    <div class="midlle-m-middle content">
                        <div class="midlle-m-middlec" v-for='(lunbo3,index) in lunboData3' :key="index">
                            <div class="midlle-m-middlec-pic" :style="{'background':$common.randomColor()}"></div>
                            <div class="midlle-m-middlec-text">
                                <div>￥6.6</div>
                                <div>268人已抢</div>
                            </div>
                        </div>
                    </div>
                    <div class="midlle-m-bottom">
                        <div class="middle-m-bottomf">
                            <div class="middle-m-bottomc"></div>
                        </div>
                    </div>
                </div>
                <div class="middle-bottom">
                    <div class="middle-bottom-t"></div>
                    <div class="middle-bottom-b"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "index",
        props:['notop'],
        components:{
            goBackHeader,
        },
        data(){
            return {
                // notop:false,
                longClick:0,
                timeOutEvent:null,
                headerTitle:[
                    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                    {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                ],
                lunboData:[{},{},{},{}],
                lunboData2:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                lunboData3:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                lunboIndex:0,
                cfixedWidth:0,
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
            handleClickBack(){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击事件
                    console.log('click')
                }else{
                    console.log('scroll')
                }
            },
            handleScroll(){
                this.$refs.homepage.scrollTop;
                console.log('dyk kyd');
            },
            handleScrollLunbo2(){
                let parcent = parseInt((this.$refs.lunbo2.scrollLeft/(this.$refs.lunbo2child[0].clientWidth*this.lunboData2.length - this.$refs.lunbo2.clientWidth))*100) - 50;
                this.cfixedWidth = parcent > 0?parcent:0;
            }
        }
    }
</script>

<style scoped lang="less">
    .homepage{
        width: 100%;
        height: 100%;
        .goshopping-header{
            height: 8%;
            transition: height 1s ease;
        }
        .goshopping-header.notop{
            /*height: 0;*/
        }
        .goshopping-search{
            height: 8%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .goshopping-search-input{
                width: 60%;
                height: 70%;
                border-radius: 20px;
                background-color: #eee;
            }
            .goshopping-search-btn{
                width: 20%;
                height: 70%;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                background-color: var(--main-bg-color);
                align-items: center;
            }
        }
        .goshopping-content{
            width: 100%;
            height: 84%;
            overflow-y: auto;
            transition: height 1s ease;
            .goshopping-content-header{
                width: 100%;
                height: 6%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .content-right,.content-left{
                    width: 10%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .content-right{

                }
                .content-middle{
                    width: 80%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    /*flex-wrap: nowrap;*/
                    .content-child{
                        flex-shrink: 0;
                        width: 25%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                .content-left{

                }

            }
            .goshopping-content-middle{
                width: 100%;
                height: 94%;
                overflow-y: auto;
                .middle-top{
                    width: 96%;
                    height: 70%;
                    background-color: #eee;
                    padding: 2%;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    .middle-top-t{
                        width: 100%;
                        height: 30%;
                        position: relative;
                        .middle-lunbo{
                            width: 100%;
                            height: 100%;
                            .middle-lunbo-pic{
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        }
                        .middle-indicator{
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 20%;
                            background-color: #418045;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .middle-indicator-child{
                                width: 0.3rem;
                                height: 0.3rem;
                                border-radius: 50%;
                                background-color: #00c800;
                                margin: 0 5px;
                            }
                        }
                    }
                    .middle-top-m{
                        width: 100%;
                        height: 45%;
                        .middle-top-m1{
                            flex-shrink: 0;
                            width: 100%;
                            height: 90%;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            overflow-x: auto;
                            .middle-top-m1-child{
                                flex-shrink: 0;
                                width: 20%;
                                height: 100%;
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-start;
                                align-items: center;
                                .middle-top-m1-cc{
                                    flex-shrink: 0;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-around;
                                    align-items: center;
                                    width: 100%;
                                    height: 50%;
                                    .middle-top-cc-pic{
                                        flex-shrink: 0;
                                        width: 1rem;
                                        height: 1rem;
                                        background-color: #940619;
                                        border-radius: 50%;
                                    }
                                    .middle-top-cc-title{
                                        color:var(--backfriend-name);
                                    }
                                }
                            }
                        }
                        .middle-top-m2{
                            width: 100%;
                            height: 10%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .middle-top-m2-child{
                                width: 20%;
                                height: 0.2rem;
                                border-radius: 10px;
                                background-color: #940619;
                                position: relative;
                                .middle-top-m2-cfixed{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 50%;
                                    height: 100%;
                                    border-radius: 10px;
                                    background-color: #00c800;
                                }
                            }
                        }
                    }
                    .middle-top-b{
                        width: 100%;
                        height: 25%;
                        position: relative;
                        .middle-top-bf{
                            position: absolute;
                            top: 30%;
                            left: 35%;
                            width: 30%;
                            height: 0.8rem;
                            border-radius: 10px;
                            background-color: #940619;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .middle-top-bcc{

                            }
                        }
                    }
                }
                .middle-m{
                    width: 100%;
                    height: 40%;
                    margin-top: 2%;
                    background-color: #eee;
                    border-radius: 10px;
                    .middle-m-top{
                        width: 96%;
                        height: 15%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 2%;
                    }
                    .midlle-m-middle{
                        width: 100%;
                        height: 75%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .midlle-m-middlec{
                            width: 25%;
                            height: 96%;
                            padding: 2%;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            flex-direction: column;
                            .midlle-m-middlec-pic{
                                width: 2rem;
                                height: 2rem;
                                border-radius: 10px;
                            }
                            .midlle-m-middlec-text{
                                div{
                                    text-align: center;
                                }
                            }
                        }
                    }
                    .midlle-m-bottom{
                        width: 100%;
                        height: 10%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .middle-m-bottomf{
                            position: relative;
                            width: 20%;
                            height: 50%;
                            background-color: #940619;
                            border-radius: 10px;
                            .middle-m-bottomc{
                                position: absolute;
                                width: 50%;
                                height: 100%;
                                top: 0;
                                left: 0;
                                background-color: #00c800;
                                border-radius: 10px;
                            }
                        }
                    }
                }
                .middle-bottom{
                    width: 100%;
                    height: 100%;
                    margin-top: 2%;
                    background-color: #eee;
                }
            }
        }
        .goshopping-content.notop{
            /*height: 92%;*/
        }
    }
</style>