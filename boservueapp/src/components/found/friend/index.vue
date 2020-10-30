<template>
    <div class="all friend" @touchend="handelFriendTouchend">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div
                class="content friend-content"
                :class="showContent?'showContent':''"
                ref="friendContent"
                @scroll="handleScroll">
            <div
                    class="friend-child"
                    v-for="(friend,index) in friendData"
                    :key="friend.id"
                    ref="friendChild">
                <div class="friend-child-left">
                    <div class="friend-child-img" :style="{'background':$common.randomColor()}"></div>
                </div>
                <div class="friend-child-right">
                    <!--:class="(activeIndex == index && showContent)?'active':''"-->
                    <div class="friend-child-top" ref="childTop">
                        <span class="friend-child-name">{{friend.name}}</span>
                    </div>
                    <div class="friend-child-middle" ref="childMiddle">
                        <span class="friend-child-content">{{friend.content}}</span>
                    </div>
                    <div class="friend-child-bottom">
                        <span class="friend-child-time">{{friend.time}}</span>
                        <span class="friend-child-option" ref="childoption" @touchend="handleTouchendOption(index,$event)">
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </span>
                        <!--v-show="showFixed[index] == true"-->
                        <div class="friend-child-fixed" ref="childfixed">
                            <span class="friend-fixed-supper" @touchend="handleTouchendSupper(index,$event)">
                                <span class="fixed-supper"></span>
                                <span v-show="!friend.supperFlag">点赞</span>
                                <span v-show="friend.supperFlag">取消点赞</span>
                            </span>
                            <span class="friend-fixed-content" @touchend="handleTouchendContent(index,$event)">
                                <span class="fixed-content"></span><span>评论</span>
                            </span>
                        </div>
                    </div>
                    <div class="friend-child-supper" v-if="friend.supper !== ''">
                        <span class="friend-supper-flag"></span>
                        <span class="friend-supper-name">{{friend.supper}}</span>
                    </div>
                    <div class="friend-child-comments" v-if="friend.list.length !== 0">
                        <div
                                class="friend-child-list"
                                v-for="(bitem,bindex) in friend.list"
                                :key="bindex" >
                            <div
                                    class="friend-child-zmj"
                                    v-for="(citem,cindex) in bitem"
                                    :key="cindex"
                                    @touchend="handleTouchendItem(index,bindex,cindex,$event)">
                                <div
                                        class="friend-child-item"
                                        v-if="citem.other == ''"
                                        :class="(index==contentPostion.i&&bindex==contentPostion.j&&cindex==contentPostion.k)?'active':''">
                                    <span class="friend-item-name">{{citem.name}}</span>
                                    <span>:</span>
                                    <span>{{citem.content}}</span>
                                    <div
                                            class="friend-item-delete"
                                            v-if="citem.name == 'dw' && index == contentPostion.i && bindex == contentPostion.j && cindex == contentPostion.k">
                                        <span @touchend="handleTouchendDelete(index,bindex,cindex,$event)">删除该评论</span>
                                    </div>
                                </div>
                                <div
                                        class="friend-child-item"
                                        v-else-if="citem.other !== ''"
                                        :class="(index == contentPostion.i && bindex == contentPostion.j && cindex == contentPostion.k)?'active':''">
                                    <span class="friend-item-name">{{citem.name}}</span>
                                    <span>回复</span>
                                    <span class="friend-item-name">{{citem.other}}</span>
                                    <span>:</span>
                                    <span>{{citem.content}}</span>
                                    <div
                                            class="friend-item-delete"
                                            v-if="citem.name == 'dw' && index == contentPostion.i && bindex == contentPostion.j && cindex == contentPostion.k">
                                        <span @touchend="handleTouchendDelete(index,bindex,cindex,$event)">删除该回复</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="friend-footer" v-show="showContent" @touchend="handelFooterTouchend($event)">
            <content-footer :contentFooterObj="contentFooterObj" @on-updata-friendData="updata"></content-footer>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import contentFooter from '@/components/common/contentFooter.vue';
    export default {
        name: "friend",
        components:{
            goBackHeader,contentFooter
        },
        data(){
            return {
                friendData:[
                    {
                        id:"10001",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。风筝放起来，来来来来，我就是一个菠菜，菜菜菜菜。。。。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶、欢欢、莹莹、妮妮、快快、乐乐、健健、康康',
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
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶',
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    },
                    {
                        id:"10003",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'',
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    },
                    {
                        id:"10004",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'',
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
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶',
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    },
                    {
                        id:"10006",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶',
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
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'贝贝、晶晶',
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    },
                    {
                        id:"10008",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'',
                        supperFlag:0,//0未点赞 1点赞
                        list:[],
                    },
                    {
                        id:"10009",
                        name:'豆豆',
                        content:"今天天气真好，适合郊外放风筝。",
                        time:'15分钟前',
                        supper:'',
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
                activeIndex:-1,//点击操作项的下标
                showContent:false,
                contentFooterObj:{
                    num:2,
                    contentPostion:{
                        i:-1,
                        j:-1,
                        k:-1,
                    }
                },
                contentPostion:{//评论回复的位置 friendData i 下标 j friendData.list j 下标 friendData.list[j] k 下标
                    i:-1,
                    j:-1,
                    k:-1,
                },
                timer:null,
                scrollHeight: 0,
            }
        },
        methods:{
            handelFriendTouchend(){//点击其他地方 悬浮框消失
                this.showContent = false;
                this.childFixedFn(this.activeIndex,0);
                this.updataStatus()
            },
            handleScroll(){//滚动条事件
                // this.showContent = false;
                let content = document.getElementsByClassName('friend-content')[0];
                this.scrollHeight = content.scrollTop;
            },
            handleTouchendSupper(i,e){//点赞
                e.stopPropagation()
                if (!this.friendData[i].supperFlag){
                    if (this.friendData[i].supper !== ''){
                        this.friendData[i].supper += '、dw';
                    } else {
                        this.friendData[i].supper += 'dw';
                    }
                    this.friendData[i].supperFlag = 1;
                } else{
                    let supper = this.friendData[i].supper.split('、');
                    let supperStr = supper.splice(0,supper.length-1,1).join('、')
                    this.friendData[i].supper = supperStr;
                    this.friendData[i].supperFlag = 0;
                }
                this.$set(this,'friendData',this.friendData);
                this.childFixedFn(i,0);
            },
            handleTouchendContent(i,e){//评论
                let that = this;
                // let content = document.getElementsByClassName('friend-content')[0];
                // let contentHeight = content.clientHeight;
                e.stopPropagation();
                clearInterval(that.timer)
                let child = that.$refs.friendChild;
                let height = 0;
                if (i!==0){
                    for (let z=0;z< i;z++){
                        height += child[z].clientHeight;
                    }
                }
                // let bool = height - this.scrollHeight < contentHeight;//总高度 - 滚动条的高度 与 页面的高度
                that.timer = setInterval(()=>{
                    if (this.scrollHeight > height){
                        this.scrollHeight --;
                    } else{
                        this.scrollHeight ++;
                    }
                    that.$refs.friendContent.scrollTop = this.scrollHeight;
                    // || bool
                    if (this.scrollHeight == height || i==0 ){
                        clearInterval(that.timer);
                        this.contentFooterObj.contentPostion.i = -1;
                        that.showContent = true;
                    }
                },20)
                that.childFixedFn(i,0);
            },
            handleTouchendOption(i,e){//弹出点赞和评论的悬浮框
                e.stopPropagation()
                this.updataStatus()
                this.activeIndex = i;
                let child = document.getElementsByClassName('friend-child-fixed');
                for (let z=0;z<child.length;z++){
                    if (i!==z){
                        child[z].style.display = 'none';
                    }
                }
                this.showContent = false;
                this.childFixedFn(i,1);
            },
            childFixedFn(i,num){
                if (i == -1)return
                let str = num == 0?'none':'flex';
                let childFixed = document.getElementsByClassName('friend-child-fixed')[i];
                childFixed.style.display = str;
            },
            handelFooterTouchend(e){
                e.stopPropagation()
            },
            updata(val){
                if (this.contentPostion.k == -1){
                    this.friendData[this.activeIndex].list.push([val])
                } else {
                    this.friendData[this.contentPostion.i].list[this.contentPostion.j].push(val)
                }
                this.$set(this,'friendData',this.friendData);
                this.updataStatus()
            },
            handleTouchendItem(i,j,k,e){
                e.stopPropagation()
                let name = this.friendData[i].list[j][k].name;
                this.contentPostion.i = i;
                this.contentPostion.j = j;
                this.contentPostion.k = k;
                if (name == 'dw'){
                    return
                }
                this.childFixedFn(this.activeIndex,0);
                this.activeIndex = -1;
                this.contentFooterObj.contentPostion = this.contentPostion;
                this.showContent = true;
            },
            handleTouchendDelete(i,j,k,e){
                e.stopPropagation()
                this.friendData[i].list[j].splice(k,1);
            },
            updataStatus(){//重置状态
                this.contentPostion = {
                    i:-1,
                    j:-1,
                    k:-1,
                };
                this.activeIndex = -1;
            },
        },
        mounted(){

        },
        created(){

        }
    }
</script>

<style scoped lang="less">
    .friend{
        width: 100%;
        .friend-content{
            width: 100%;
            height: 94%;
            overflow-y: auto;
            .friend-child{
                padding: 0 2%;
                width: 96%;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #eee;
                .friend-child-left{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding: 2% 0;
                    .friend-child-img{
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: 10px;
                        background: green;
                    }
                }
                .friend-child-right{
                    width: calc(100% - 1.2rem);
                    padding: 2% 0 2% 2%;
                    .friend-child-top{
                        font-weight: bold;
                        color: #576999;
                    }
                    .friend-child-top.active{
                        background: #ddd;
                    }
                    .friend-child-middle{
                        /*color:#666;*/
                    }
                    .friend-child-bottom{
                        width: 100%;
                        font-size: 0.35rem;
                        color:#999;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: relative;
                        .friend-child-option{
                            width: 10%;
                            height: 0.3rem;
                            background: rgba(200,200,200,0.5);
                            border-radius: 10px;
                            ul{
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: space-around;
                                align-items: center;
                                li{
                                    background: #fff;
                                    font-weight: bold;
                                    font-size: 0.4rem;
                                    width: 0.2rem;
                                    height: 0.2rem;
                                    border-radius: 50%;
                                    display: inline-block;
                                }
                            }
                        }
                    }
                    .friend-child-supper{
                        padding: 1%;
                        background: #eee;
                        margin-top: 1%;
                        margin-bottom: 1%;
                        .friend-supper-flag{
                            width: 0.3rem;
                            height: 0.3rem;
                            border-radius: 50%;
                            background: pink;
                            display: inline-block;
                        }
                        .friend-supper-name{
                            margin-right: 1%;
                            margin-left: 1%;
                            font-weight: bold;
                            color: #576999;
                            font-size: 0.35rem;
                        }
                    }
                    .friend-child-comments{
                        background: #eee;
                        padding: 2%;
                        margin-top: 1%;
                        margin-bottom: 1%;
                        color:var(--font-color);
                        .friend-child-item{
                            font-size: 0.35rem;
                            .friend-item-name{
                                color:#576999;
                                font-weight: bold;
                            }
                            .friend-item-delete{
                                color:green;
                                span{
                                    font-size: 0.2rem;
                                    border-bottom: 1px solid green;
                                }
                            }
                        }
                        .friend-child-item.active{
                            background: #ddd;
                        }
                    }
                }
                .friend-child-fixed{
                    position: absolute;
                    bottom: 0;
                    left: 25%;
                    width: 60%;
                    height: 0.5rem;
                    background: rgba(0,0,0,0.8);
                    /*display: flex;*/
                    justify-content: space-around;
                    align-items: center;
                    color:#fff;
                    font-size: 0.35rem;
                    border-radius: 5px;
                    display: none;
                    .friend-fixed-supper,.friend-fixed-content{
                        width: 40%;
                    }
                    .fixed-supper,.fixed-content{
                        width: 0.3rem;
                        height: 0.3rem;
                        text-align: left;
                        background: pink;
                        border-radius: 50%;
                        display: inline-block;
                        margin-left: 5%;
                        margin-right: 5%;
                    }
                    .fixed-content{
                        background: #00c800;
                    }
                }
            }
        }
        .friend-content.showContent{
            height: 84%;
        }
        .friend-footer{
            width: 100%;
            background: #eee;
            height: 10%;
        }
    }
</style>