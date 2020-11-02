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
                            <div class="child-left-name" :style="{'color':$common.randomColor()}">{{video.name}}</div>
                        </div>
                        <div class="child-top-right">
                            <div class="child-right-circle"></div>
                            <div class="child-right-circle"></div>
                            <div class="child-right-circle"></div>
                        </div>
                    </div>
                    <div class="child-middle">
                        <div
                            class="child-middle-fixed barrages-drop"
                            :ref="'content'+index"
                            @touchstart="handleTouchStart"
                            @touchend.stop="handleClickBack(index)">
                            <vue-baberrage
                                :isShow="barrageIsShow[index]"
                                :barrageList="barrageList[index]"
                                :maxWordCount="maxWordCount[index]"
                                :throttleGap="throttleGap[index]"
                                :loop="barrageLoop[index]"
                                :boxHeight="boxHeight[index]"
                                :messageHeight="messageHeight[index]">
                            </vue-baberrage>
                        </div>
                    </div>
                    <div class="child-bottom">
                        <!--video.text 超过45个字符就...-->
                        <div class="child-b-top">{{video.text}}</div>
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
                                    <span>{{video.super}}</span>
                                </div>
                                <div class="child-b-right-2 child-b-div">
                                    <span class="child-span span4"></span>
                                    <span>{{video.say}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="child-b-bottom">
                            <div class="child-b-span" :style="{'background':$common.randomColor()}"></div>
                            <div class="child-b-name">{{video.superName}}</div>
                            <!--<div>赞过</div>-->
                            <div>等{{video.superNumber}}个朋友赞过</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import { vueBaberrage,MESSAGE_TYPE} from 'vue-baberrage';
    import backImg from "@/assets/img/author1.jpg";
    export default {
        name: "video2",
        components:{
            goBackHeader,vueBaberrage
        },
        data(){
            return {
                videoData:[
                    {
                        id:'10001',
                        name:"哈喽dodo",
                        text:"新疆的秋天匆匆一面，不要错过和它的相见，在下个四季轮回之前。。。",
                        super:1026,
                        say:619,
                        superName:'豆豆',
                        superNumber:2,
                    },
                    {
                        id:'10002',
                        name:"哈喽pipi",
                        text:"岳阳的秋天匆匆一面，不要错过和它的相见，在下个四季轮回之前。。。",
                        super:619,
                        say:1020,
                        superName:'平平',
                        superNumber:1120,
                    },
                    {
                        id:'10003',
                        name:"哈喽zozo",
                        text:"长沙的秋天匆匆一面，不要错过和它的相见，在下个四季轮回之前。。。",
                        super:615,
                        say:619,
                        superName:'舟舟',
                        superNumber:12,
                    }
                ],
                msg: 'dw你最帅~，最帅，最帅。。。',
                barrageIsShow: [],
                messageHeight: [],
                boxHeight: [],
                barrageLoop: [],
                maxWordCount: [],
                throttleGap: [],
                barrageList: [],
                longClick:0,
                timeOutEvent:0,
            }
        },
        created(){
            this.videoData.forEach(()=>{
                this.barrageIsShow.push(true);
                this.messageHeight.push(3);
                this.barrageLoop.push(true);
                this.maxWordCount.push(3);
                this.throttleGap.push(5000);
                this.barrageList.push([]);
            })
        },
        mounted(){
            this.videoData.forEach(()=>{
                this.boxHeight.push(this.$refs.content0[0].clientHeight);
            })
            this.addToList();
        },
        methods: {
            addToList() {
                // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg'
                let list = [
                    {
                        id: 1,
                        avatar:backImg,
                        msg: this.msg,
                        time: 1,
                        barrageStyle: 'red'
                    },
                    {
                        id: 2,
                        avatar: backImg,
                        msg: this.msg,
                        time: 3,
                        barrageStyle: 'green'
                    },
                    {
                        id: 3,
                        avatar: backImg,
                        msg: this.msg,
                        time: 7,
                        barrageStyle: 'normal'
                    },
                    {
                        id: 4,
                        avatar: backImg,
                        msg: this.msg,
                        time: 10,
                        barrageStyle: 'blue'
                    },
                    {
                        id: 5,
                        avatar:backImg,
                        msg: this.msg,
                        time: 2,
                        barrageStyle: 'red'
                    },
                    {
                        id: 6,
                        avatar: backImg,
                        msg: this.msg,
                        time: 4,
                        barrageStyle: 'normal'
                    },
                    {
                        id: 7,
                        avatar: backImg,
                        msg: this.msg,
                        time: 8,
                        barrageStyle: 'red'
                    },
                    {
                        id: 8,
                        avatar: backImg,
                        msg: this.msg,
                        time: 9,
                        barrageStyle: 'normal'
                    },
                    {
                        id: 9,
                        avatar: backImg,
                        msg: this.msg,
                        time: 11,
                        barrageStyle: 'red'
                    },
                    {
                        id: 10,
                        avatar: backImg,
                        msg: this.msg,
                        time: 13,
                        barrageStyle: 'yellow'
                    }
                ];
                list.forEach((v) => {
                    this.barrageList.forEach((item)=>{
                        item.push(
                            {
                                id: v.id,
                                avatar: v.avatar,
                                msg: v.msg,
                                time: v.time,
                                type: MESSAGE_TYPE.NORMAL,
                                barrageStyle: v.barrageStyle
                            }
                        )
                    })
                });
            },
            //弹幕的清除与弹出
            clearBarrage(show,i){
                show = show == true ? false : true;
                this.barrageIsShow[i] = show;
                this.$set(this.barrageIsShow,[i],show);
            },

            handleTouchStart(){
                this.longClick=0;//设置初始为0
                this.timeOutEvent = setTimeout(()=>{
                    //此处为长按事件-----在此显示遮罩层及删除按钮
                    this.longClick=1;//假如长按，则设置为1
                },300);
            },
            handleClickBack(i){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击事件
                    this.clearBarrage(this.barrageIsShow[i],i)
                }else{
                    //todo 滑动事件
                    console.log('滑动了。。。。')
                }
            }
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
                        height: 100%;
                        background-color: transparent;
                        display: flex;
                        .barrages-drop {
                            .baberrage-stage {
                                position: absolute;
                                width: 100% !important;
                                height: 100% !important;
                                overflow: hidden;
                                top: 0;
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