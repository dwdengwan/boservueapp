<template>
    <div class="all video2">
        <div class="header video-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content video-content">
            <div
                class="video-content-child"
                v-for="(video,index) in videoData"
                :key="index">
                <div class="child-kongge"></div>
                <div class="child-content">
                    <div class="child-top">
                        <div class="child-top-left">
                            <div class="child-left-pic" :style="{'background':$common.randomColor()}"></div>
                            <div class="child-left-name">哈喽kiki</div>
                        </div>
                        <div class="child-top-right">
                            <div class="child-right-circle"></div>
                            <div class="child-right-circle"></div>
                            <div class="child-right-circle"></div>
                        </div>
                    </div>
                    <div class="child-middle">
                        <div class="child-middle-fixed">
                            <span class="child-fixed-text">
                                <span class="child-fixed-pic" :style="{'background':$common.randomColor()}"></span>
                                <span class="child-fixed-say" :style="{'color':$common.randomColor()}">这视频好炫酷呀。好喜欢，好喜欢。</span>
                            </span>
                        </div>
                    </div>
                    <div class="child-bottom">
                        <div class="child-b-top">
                            新疆的秋天匆匆一面，不要错过和它的相见，在下个四季轮回之前。。。
                        </div>
                        <div class="child-b-middle">
                            <div class="child-b-left">
                                <div class="child-b-left-1 child-b-div">
                                    <span class="child-span span1"></span>
                                    <span>收藏</span>
                                </div>
                                <div class="child-b-left-2 child-b-div">
                                    <span class="child-span span2"></span>
                                    <span>转发</span>
                                </div>
                            </div>
                            <div class="child-b-right">
                                <div class="child-b-right-1 child-b-div">
                                    <span class="child-span span3"></span>
                                    <span>3.3万</span>
                                </div>
                                <div class="child-b-right-2 child-b-div">
                                    <span class="child-span span4"></span>
                                    <span>619</span>
                                </div>
                            </div>
                        </div>
                        <div class="child-b-bottom">
                            <div class="child-b-span" :style="{'background':$common.randomColor()}"></div>
                            <div class="child-b-name">豆豆</div>
                            <!--<div>赞过</div>-->
                            <div>等2个朋友赞过</div>
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
        name: "video2",
        components:{
            goBackHeader
        },
        data(){
            return {
                videoData:[
                    {},{},{}
                ],
            }
        },
        created(){

        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
.video2{
    .video-content{
        height: 94%;
        width: 100%;
        .video-content-child{
            height: 100%;
            width: 100%;
            .child-kongge{
                height: 1%;
                width: 100%;
                background-color: #eee;
            }
            .child-content{
                width: 100%;
                height: 99%;
                .child-top{
                    padding: 0 2%;
                    width: 96%;
                    height: 8%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .child-top-left{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        width: 90%;
                        .child-left-pic{
                            width: 0.8rem;
                            height: 0.8rem;
                            border-radius: 50%;
                        }
                        .child-left-name{
                            margin: 0 2%;
                        }
                    }
                    .child-top-right{
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 10%;
                        .child-right-circle{
                            width: 0.1rem;
                            height: 0.1rem;
                            border-radius: 50%;
                            background-color: #000;
                        }
                    }
                }
                .child-middle{
                    position: relative;
                    width: 100%;
                    height: 75%;
                    background-color: rgba(0,0,0,0.8);
                    .child-middle-fixed{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 8%;
                        background-color: transparent;
                        display: flex;
                        .child-fixed-text{
                            display: flex;
                            align-items: center;
                            height: 100%;
                            width: 100%;
                            .child-fixed-pic{
                                width: 0.6rem;
                                height: 0.6rem;
                                border-radius: 50%;
                                margin: 0 2%;
                            }
                        }
                    }
                }
                .child-bottom{
                    padding: 1% 2%;
                    height: 16%;
                    width: 96%;
                    .child-b-top{
                        height: 50%;
                    }
                    .child-b-middle{
                        height: 25%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        div{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            width: 50%;
                        }
                        .child-b-left{

                        }
                        .child-b-right{
                            justify-content: flex-end;
                        }
                        .child-b-div{
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                        }
                        .child-span{
                            width: 0.5rem;
                            height: 0.5rem;
                            border-radius: 50%;
                            background-color: green;
                            margin: 0 5%;
                        }
                    }
                    .child-b-bottom{
                        height: 25%;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        .child-b-span{
                            width: 0.5rem;
                            height: 0.5rem;
                            border-radius: 50%;
                            background-color: green;
                        }
                        .child-b-name{
                            color: #576999;
                            margin: 0 2%;
                        }
                    }
                }
            }
        }
    }
}
</style>