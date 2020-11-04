<template>
    <div class="all video2">
        <div class="header video-header">
            <go-back-header></go-back-header>
        </div>
        <div
            class="content video-content"
            :class="noComments ? '':'autoheight'">
            <div
                class="video-content-child"
                v-for="(video,index) in videoData"
                :key="index">
                <div class="child-kongge"></div>
                <div class="child-content">
                    <div class="child-top">
                        <div class="child-top-left">
                            <div
                                class="child-left-pic"
                                :style="{'background':$common.randomColor()}"
                                @touchend.stop="goFriend(0,index)">
                            </div>
                            <div
                                class="child-left-name"
                                :style="{'color':$common.randomColor()}"
                                @touchend.stop="goFriend(0,index)">
                                {{video.name}}
                            </div>
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
                            @touchend.stop="handleClickBack(index,0)">
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
                                <div
                                    class="child-b-right-1 child-b-div"
                                    :class="supperActive[index]?'supper-active':''">
                                    <span class="child-span span3" @touchend.stop="handleSupper(index)"></span>
                                    <span @touchend.stop="handleSupper(index)">{{video.super}}</span>
                                </div>
                                <div
                                    class="child-b-right-2 child-b-div"
                                    @touchend="handleComments">
                                    <span class="child-span span4"></span>
                                    <span>{{video.say}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="child-b-bottom">
                            <div class="child-b-span" :style="{'background':$common.randomColor()}"></div>
                            <div v-show="supperActive[index]" style="margin-left: 2%;">你和</div>
                            <div class="child-b-name" @touchend.stop="goFriend(1,index)">{{video.superName}}</div>
                            <!--<div>赞过</div>-->
                            <div>等{{video.superNumber}}个朋友赞过</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="content video-content no-comments"
            ref="comments"
            :class="noComments ? '':'autoheight'">
            <div
                 class="no-comments-top content"
                 @touchstart="handleTouchStart"
                 @scroll="handleScroll"
                 ref="commentstop"
                 @touchend.stop="handleClickBack('1126',1)">
                <div
                    class="comments-child"
                    ref="commentschild"
                    v-for="(comments,index) of commentsData"
                    :key="index">
                    <div class="comments-child-top">
                        <div class="child-author">
                            <span :style="{'background':$common.randomColor()}"></span>
                        </div>
                        <div class="child-info">
                            <div class="child-info-name" :style="{'color':$common.randomColor()}">{{comments.name}}</div>
                            <div class="child-info-text">{{comments.content}}</div>
                            <div class="child-info-opper">
                                <div class="child-opper-left">
                                    <span class="child-opper-author"></span>
                                    <span class="child-opper-number">{{comments.supper}}</span>
                                </div>
                                <div class="child-opper-right">
                                    <span class="child-opper-author"></span>
                                    <span class="child-opper-number">{{comments.comment}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="comments.list.length">
                        <div class="comments-child-bottom" v-for="(item,iindex) in comments.list" :key="iindex">
                            <div v-for="(list,lindex) in item" :key="lindex">
                                <div class="child-bottom" v-if="list.other == ''">
                                    <span class="child-bottom-span">
                                        <span class="bottom-author" :style="{'background':$common.randomColor()}"></span>
                                        <span class="bottom-name">{{list.name}}</span>
                                    </span>
                                    <span>：</span>
                                    <span>{{list.content}}</span>
                                </div>
                                <div class="child-bottom" v-else-if="list.other !== ''">
                                    <span class="child-bottom-span">
                                        <span class="bottom-author" :style="{'background':$common.randomColor()}"></span>
                                        <span class="bottom-name">{{list.name}}</span>
                                    </span>
                                    <span style="margin: 0 10px;">回复</span>
                                    <span class="child-bottom-span">
                                        <span class="bottom-author" :style="{'background':$common.randomColor()}"></span>
                                        <span class="bottom-name">{{list.other}}</span>
                                    </span>
                                    <span>：</span>
                                    <span>{{list.content}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="no-comments-bottom">
                <textarea v-focus type="text" v-model="commentsStr" @focus="handleFocus"></textarea>
                <button @touchend="handleSend(commentsStr)">send</button>
            </div>
            <div
                class="commentstop-fixed content"
                @touchstart="handleTouchStart"
                ref="fixed"
                @touchend.stop="handleClickBack('1126',2)">
                 <div
                     ref="fixedchild"
                     @scroll="handleFixedScroll"
                     class="fixed-child"
                     v-for="(comments,index) in commentsData"
                     :style="{'background':$common.randomColor()}"
                     :key="index">
                     <span class="fixed-child-left">
                         <span class="fixed-author" :style="{'background':$common.randomColor()}"></span>
                     </span>
                     <span class="fixed-text" :style="{'color':$common.randomColor()}">{{comments.content}}</span>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import { vueBaberrage,MESSAGE_TYPE} from 'vue-baberrage';
    import backImg from "@/assets/img/author1.jpg";

    const barrageStyle = ['red','green','normal','blue'];

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
                        say:10,
                        superName:'豆豆',
                        superNumber:2,
                    },
                    {
                        id:'10002',
                        name:"哈喽pipi",
                        text:"岳阳的秋天匆匆一面，不要错过和它的相见，在下个四季轮回之前。。。",
                        super:619,
                        say:8,
                        superName:'平平',
                        superNumber:1120,
                    },
                    {
                        id:'10003',
                        name:"哈喽zozo",
                        text:"长沙的秋天匆匆一面，不要错过和它的相见，在下个四季轮回之前。。。",
                        super:615,
                        say:20,
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
                supperActive:[],
                noComments:true,
                commentsData:[
                    {
                        id:"10001",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。风筝放起来，来来来来，我就是一个菠菜，菜菜菜菜。。。。",
                        supper:10,
                        comment:2,
                        supperFlag:0,//0未点赞 1点赞
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
                        name:'哈喽aa',
                        content:"今天天气真好，适合郊外放风筝。",
                        supper:5,
                        comment:1,
                        supperFlag:0,//0未点赞 1点赞
                        list:[
                            [
                                {
                                    name:'贝贝',
                                    other:'',
                                    content:'go go go 一起一起。。来来来来，我是一个苹果，果果果果。。。',
                                },
                            ],
                        ],
                    },
                    {
                        id:"10003",
                        name:'哈喽bb',
                        content:"今天天气真好，适合郊外放风筝。22222",
                        supper:5,
                        comment:0,
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    },
                    {
                        id:"10004",
                        name:'哈喽cc',
                        content:"今天天气真好，适合郊外放风筝。3333",
                        supper:22,
                        comment:2,
                        supperFlag:0,//0未点赞 1点赞
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
                        name:'哈喽dd',
                        content:"今天天气真好，适合郊外放风筝。44444",
                        supper:12,
                        comment:0,
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    },
                    {
                        id:"10006",
                        name:'哈喽ee',
                        content:"今天天气真好，适合郊外放风筝。5555",
                        supper:24,
                        comment:2,
                        supperFlag:0,//0未点赞 1点赞
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
                        name:'哈喽ff',
                        content:"今天天气真好，适合郊外放风筝。6666",
                        supper:10,
                        comment:10,
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    },
                    {
                        id:"10008",
                        name:'哈喽gg',
                        content:"今天天气真好，适合郊外放风筝。7777",
                        time:'15分钟前',
                        supper:15,
                        comment:0,
                        list:[],
                    },
                    {
                        id:"10009",
                        name:'哈喽hh',
                        content:"今天天气真好，适合郊外放风筝。888888",
                        supper:15,
                        comment:2,
                        supperFlag:0,//0未点赞 1点赞
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
                commentsStr:'',
                timer:null,
                scrollHeight:0,
                timerFixed:null,
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
                this.supperActive.push(false);
            });
        },
        mounted(){
            this.videoData.forEach(()=>{
                this.boxHeight.push(this.$refs.content0[0].clientHeight);
            })
            this.addToList();
        },
        destroyed(){
            clearInterval(this.timer);
            clearInterval(this.timerFixed);
        },
        methods: {
            addToList() {
                // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg'
                let list = [];
                this.commentsData.forEach((item,i)=>{
                    let obj = {
                        id: 1,
                        avatar:backImg,
                        msg: '',
                        time: 1,
                        barrageStyle: ''
                    };
                    obj.id = i;
                    obj.msg = item.content;
                    obj.time = parseInt(Math.random()*10 + 1);
                    obj.barrageStyle = barrageStyle[Math.floor(Math.random() * barrageStyle.length)];
                    list.push(obj);
                })
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
            handleClickBack(i,num){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击事件
                    if(i!=='1126'){
                        this.clearBarrage(this.barrageIsShow[i],i)
                    }else{
                        this.handleComments()
                    }
                }else{
                    //todo 滑动事件
                    if (num == 1){
                        clearInterval(this.timer);
                    } else if (num == 2){
                        clearInterval(this.timerFixed);
                    }
                    console.log('滑动了。。。。')
                }
            },
            // 点赞
            handleSupper(i){
                this.supperActive[i] = !this.supperActive[i];
                if (this.supperActive[i]){
                    this.videoData[i].super ++;
                    this.videoData[i].superNumber ++;
                } else{
                    this.videoData[i].super --;
                    this.videoData[i].superNumber --;
                }
            },
            //跳转至朋友圈
            goFriend(num,i){
                let author = '';
                if (num){
                    author = this.videoData[i].superName;
                } else{
                    author = this.videoData[i].name;
                }
                this.$router.push({path:'/found/friend',query:{name:'朋友圈',author}})
            },
            //评论弹框显示与隐藏
            handleComments(){
                this.noComments = !this.noComments;
                this.handleFixedScroll();
            },
            //send
            handleSend(str){
                if (str == '') return
                let obj = {
                        id:"10001",
                        name:'dw',
                        content:str,
                        supper:0,
                        comment:0,
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    };
                this.commentsData.push(obj);
                this.$set(this,'commentsData',this.commentsData);
                this.addToList();
                this.handleFocus();
                this.handleFixedScroll();
                this.commentsStr = '';
            },
            handleScroll(){//滚动条事件
                let content = document.getElementsByClassName('no-comments-top')[0];
                this.scrollHeight = content.scrollTop;
            },
            //输入框获取焦点
            handleFocus(){
                let that = this;
                //回到底部
                clearInterval(that.timer);
                let child = that.$refs.commentschild;
                let height = 0;
                let i = child.length;
                if (i!==0){
                    for (let z=0;z< i;z++){
                        height += child[z].clientHeight;
                    }
                }
                that.timer = setInterval(()=>{
                    if (this.scrollHeight < height){
                        this.scrollHeight ++;
                    }
                    that.$refs.commentstop.scrollTop = this.scrollHeight;
                    if (this.scrollHeight == height){
                        clearInterval(that.timer);
                    }
                },5)
            },
            handleFixedScroll(){
                let content = document.getElementsByClassName('commentstop-fixed')[0];
                let scrollHeight = content.scrollTop;
                let that = this;
                //回到底部
                let child = that.$refs.fixedchild;
                let height = 0;
                let i = child.length;
                if (i!==0){
                    for (let z=0;z< i;z++){
                        height += (child[z].clientHeight + 10);
                    }
                }
                height += 20;
                this.handleRebScroll(scrollHeight,height)
            },
            handleRebScroll(scrollHeight,height){
                console.log('111dyk kyd');
                let that = this;
                let timer = null;
                clearInterval(that.timerFixed);
                clearTimeout(timer);
                that.timerFixed = setInterval(()=>{
                    if (scrollHeight < height){
                        scrollHeight ++;
                    }
                    that.$refs.fixed.scrollTop = scrollHeight;
                    if (scrollHeight == height){
                        // scrollHeight = 0;
                        clearInterval(that.timerFixed);
                        timer = setTimeout(()=>{
                            this.timerFixed = setInterval(()=>{
                                if (scrollHeight > 0){
                                    scrollHeight --;
                                }else if(scrollHeight == 0){
                                    clearInterval(this.timerFixed)
                                    clearTimeout(timer);
                                    timer = setTimeout(()=>{
                                        that.handleRebScroll(scrollHeight,height)
                                    },3000)
                                }
                                that.$refs.fixed.scrollTop = scrollHeight;
                            },50)
                        },3000)
                    }
                },50)
            }
        }
    }
</script>

<style scoped lang="less">
.video2{
    .video-content{
        height: 94%;
        width: 100%;
        transition: height 2s ease;
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
                            .supper-active{
                                color:pink;
                                .child-span{
                                    background-color: pink;
                                }
                            }
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
                            background-color: var(--main-bg-color);
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
                            background-color: var(--main-bg-color);
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
    .video-content.autoheight{
        height: 0;
        border: 0;
    }
    .no-comments{
        height: 0;
        border: 0;
        transition: height 2s ease;
    }
    .no-comments.autoheight{
        height: 94%;
        width: 100%;
        position: relative;
        .no-comments-top{
            width: 100%;
            height: 90%;
            overflow-y: auto;
            .comments-child{
                border-bottom: 1px solid #eee;
                padding: 1% 0;
                .comments-child-top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    .child-author{
                        width: 12%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        span{
                            display: inline-block;
                            width: 1rem;
                            height: 1rem;
                            border-radius: 50%;
                        }
                    }
                    .child-info{
                        width: 88%;
                        .child-info-name,.child-info-text,.child-info-opper{
                            padding: 1% 2%;
                        }
                        .child-info-name{

                        }
                        .child-info-text{

                        }
                        .child-info-opper{
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                            .child-opper-left,.child-opper-right{
                                display: flex;
                                justify-content: space-around;
                                align-items: center;
                                width: 15%;
                            }
                            .child-opper-right{}
                            .child-opper-author{
                                display: inline-block;
                                width: 0.5rem;
                                height: 0.5rem;
                                border-radius: 50%;
                                background-color: var(--main-bg-color);
                            }
                            .child-opper-number{
                                margin: 0 5%;
                            }
                        }
                    }
                }
                .comments-child-bottom{
                    .child-bottom{
                        padding: 1%;
                        width: 93%;
                        margin-left: 5%;
                        .child-bottom-span{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            display: inline-block;
                        }
                        .bottom-author{
                            display: inline-block;
                            width: 0.5rem;
                            height: 0.5rem;
                            border-radius: 50%;
                        }
                        .bottom-name{
                            color:var(--backfriend-name);
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
        .no-comments-bottom{
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            textarea{
                width: 70%;
                height: 70%;
                font-size: 0.4rem;
            }
            button{
                width: 20%;
                height: 70%;
                color: var(--font-color);
                background-color: var(--main-bg-color);
                font-size: 0.4rem;
            }
        }
        .commentstop-fixed{
            position: absolute;
            width: 100%;
            height: 20%;
            overflow-y: auto;
            bottom: 10%;
            left: 0;
            background-color: rgba(0,0,0,0.2);
            .fixed-child{
                padding: 2%;
                width: 90%;
                margin: 10px 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-radius: 10px;
                margin-left: 3%;
                .fixed-child-left{
                    width: 10%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .fixed-author{
                        display: inline-block;
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
}
</style>