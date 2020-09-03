<template>
    <div class="all login">
        <div class="header login-header">
            <header-html ref="wechatHeader"></header-html>
        </div>
        <div class="content login-content" @scroll="handleScroll($event)">
            <div class="login-child vip"
                 v-for="(content,index) in vipData"
                 :key="content.id"
                 @touchstart='handleTouchStart(content,index,$event,1)'
                 @touchmove="handleTouchMove(content,index,$event,1)"
                 @touchend="handleTouchEnd(content,index,$event,1)">
                <div class="login-child-left">
                    <div class="login-child-img" :style="{background:$common.randomColor()}">
                        <div class="login-child-flag" v-if="content.number !== 0">
                            <span>{{content.number > 99 ? '99+':content.number}}</span>
                        </div>
                    </div>
                </div>
                <div class="login-child-right">
                    <div class="login-child-top">
                        <span class="login-child-name">{{content.name}}</span>
                        <span class="login-child-time">{{content.time}}</span>
                    </div>
                    <div class="login-child-bottom">
                        <span class="login-child-content">{{content.content}}</span>
                    </div>
                </div>
            </div>
            <div class="login-child"
                 :class="activeIndex == index?'vip':''"
                 v-for="(content,index) in contentData"
                 :key="content.id"
                 @touchstart='handleTouchStart(content,index,$event,1)'
                 @touchmove="handleTouchMove(content,index,$event,1)"
                 @touchend="handleTouchEnd(content,index,$event,1)">
                <div class="login-child-left">
                    <div class="login-child-img" :style="{background:$common.randomColor()}">
                        <div class="login-child-flag" v-if="content.number !== 0">
                            <span>{{content.number > 99 ? '99+':content.number}}</span>
                        </div>
                    </div>
                </div>
                <div class="login-child-right">
                    <div class="login-child-top">
                        <span class="login-child-name">{{content.name}}</span>
                        <span class="login-child-time">{{content.time}}</span>
                    </div>
                    <div class="login-child-bottom">
                        <span class="login-child-content">{{content.content}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer login-footer">
            <footer-html ref="wechatFooter"></footer-html>
        </div>
        <div class='login-fixed'
             :class="isHandTouch == true ? 'active':''"
             @touchstart="handleTouchStart('','',$event,2)"
             @touchmove="handleTouchMove('','',$event,2)"
             @touchend="handleTouchEnd('','',$event,2)">
             <div class="login-fixed-content">
                 <div class="login-fixed-child" v-for="(item,index) in fixedData" :key="item.value" @touchstart="handFixedClick(index,$event)">
                     <span>{{item.name}}</span>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
    import footerHtml from '../common/footerHtml';
    import headerHtml from '../common/headerHtml';
    export default {
        name: "index",
        components:{
            footerHtml,headerHtml
        },
        data(){
            return {
                contentData:[
                    {
                      name:"豆豆",
                      time:"周五",
                      content:"豆豆说要有自己的主见，要成熟。自己决定做的事，就一定要做到最好。要么就不做",
                      number:2,
                      id:'10003',
                      isVip:'0',
                    },
                    {
                        name:"平平",
                        time:"周四",
                        content:"平平说要有自己的主见，要成熟。",
                        number:5,
                        id:'10004',
                        isVip:'0',
                    },
                    {
                        name:"安安",
                        time:"周三",
                        content:"平平说要有自己的主见，要成熟。",
                        number:0,
                        id:'10005',
                        isVip:'0',
                    },
                    {
                        name:"快快",
                        time:"周二",
                        content:"快快说要有自己的主见，要成熟。",
                        number:10,
                        isVip:'0',
                    },
                    {
                        name:"乐乐",
                        time:"周一",
                        content:"乐乐说要有自己的主见，要成熟。",
                        number:3,
                        id:'10006',
                        isVip:'0',
                    },
                    {
                        name:"贝贝",
                        time:"周日",
                        content:"贝贝说要有自己的主见，要成熟。",
                        number:11,
                        id:'10007',
                        isVip:'0',
                    },
                    {
                        name:"晶晶",
                        time:"周六",
                        content:"晶晶说要有自己的主见，要成熟。",
                        number:2,
                        id:'10008',
                        isVip:'0',
                    },
                    {
                        name:"欢欢",
                        time:"周五",
                        content:"欢欢说要有自己的主见，要成熟。",
                        number:13,
                        id:'10009',
                        isVip:'0',
                    },
                    {
                        name:"莹莹",
                        time:"周四",
                        content:"莹莹说要有自己的主见，要成熟。",
                        number:0,
                        id:'10010',
                        isVip:'0',
                    },
                    {
                        name:"妮妮",
                        time:"周三",
                        content:"妮妮说要有自己的主见，要成熟。",
                        number:16,
                        isVip:'0',
                        id:'10011',
                    },
                ],
                vipData:[
                    {
                        name:"嗯嗯",
                        time:"周五",
                        content:"嗯嗯说要有自己的主见，要成熟。自己决定做的事，就一定要做到最好。要么就不做",
                        number:0,
                        id:'10001',
                        isVip:'1',
                    },
                    {
                        name:"噢噢",
                        time:"周四",
                        content:"噢噢说要有自己的主见，要成熟。",
                        number:5,
                        id:'10002',
                        isVip:'1',
                    },
                ],
                longClick:0,
                timeOutEvent:0,
                isHandTouch:false,
                activeIndex:-1,
                fixedData:[
                    {
                        name:'标为已读',
                        value:'1001',
                    },
                    {
                        name:'置顶聊天',
                        value:'1002',
                    },
                    {
                        name:'删除改聊天',
                        value:'1003',
                    },
                ],
                nowColData:[],
                nowColIndex:0,
            }
        },
        methods:{
            handleTouchStart(){
                this.longClick=0;//设置初始为0
                this.timeOutEvent = setTimeout(()=>{
                    //此处为长按事件-----在此显示遮罩层及删除按钮
                    this.longClick=1;//假如长按，则设置为1
                },500);
            },
            handleTouchMove(){
                clearTimeout(this.timeOutEvent);
                this.timeOutEvent = 0;
                // e.preventDefault();
            },
            handleTouchEnd(item,i,e,num){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0 && this.longClick==0){//点击
                    //此处为点击事件----在此处添加跳转详情页
                    if (num == 1){
                        //原始页面
                        this.$router.push({path:'/wechat',query:{}})
                    } else {
                        //弹出层页面
                        this.isHandTouch = false;
                        this.activeIndex = -1;
                    }
                } else {
                    //长按事件
                    if (num == 1){
                        this.isHandTouch = true;
                        this.nowColIndex = i;
                        this.nowColData = item;//当前长按行的数据。
                        if (this.nowColData.isVip == '1'){
                            if (this.vipData[this.nowColIndex].number !== 0){
                                this.fixedData[0].name = '标为已读';
                            }else{
                                this.fixedData[0].name = '标为未读';
                            }
                            this.fixedData[1].name = '取消置顶';
                            this.$set(this,'fixedData',this.fixedData)
                        } else {
                            this.activeIndex = i;
                            if (this.contentData[this.nowColIndex].number !== 0){
                                this.fixedData[0].name = '标为已读';
                            }else{
                                this.fixedData[0].name = '标为未读';
                            }
                            this.fixedData[1].name = '置顶聊天';
                            this.$set(this,'fixedData',this.fixedData)
                        }
                    } else{
                        this.isHandTouch = false;
                        this.activeIndex = -1;
                    }
                }
                return false;
            },
            handFixedClick(i,e){
                e.stopPropagation()
                e.preventDefault()
                switch (i){
                    case 0://标为已读 或者 标为未读
                        if (this.nowColData.isVip == '1'){
                            if (this.vipData[this.nowColIndex].number !== 0){
                                this.vipData[this.nowColIndex].number = 0;
                                this.fixedData[0].name = '标为未读';
                            }else{
                                this.vipData[this.nowColIndex].number = 1;
                                this.fixedData[0].name = '标为已读';
                            }
                            this.$set(this,'vipData',this.vipData);
                            this.$set(this,'fixedData',this.fixedData)
                        } else {
                            if (this.contentData[this.nowColIndex].number !== 0){
                                this.contentData[this.nowColIndex].number = 0;
                                this.fixedData[0].name = '标为未读';
                            }else{
                                this.contentData[this.nowColIndex].number = 1;
                                this.fixedData[0].name = '标为已读';
                            }
                            this.$set(this,'contentData',this.contentData);
                            this.$set(this,'fixedData',this.fixedData)
                        }
                        this.calcNum()
                        break;
                    case 1://置顶聊天 或者 取消置顶聊天
                        if (this.nowColData.isVip == '1'){
                            this.vipData.splice(this.nowColIndex,1)
                            this.nowColData.isVip = '0';
                            this.contentData.push(this.nowColData)
                            this.$set(this,'contentData',this.contentData);
                            this.$set(this,'vipData',this.vipData)
                        } else{
                            this.contentData.splice(this.nowColIndex,1)
                            this.nowColData.isVip = '1';
                            this.vipData.push(this.nowColData)
                            this.$set(this,'contentData',this.contentData);
                            this.$set(this,'vipData',this.vipData)
                        }
                        break;
                    case 2://删除该聊天
                        if (this.nowColData.isVip == '1'){
                            this.vipData.splice(this.nowColIndex,1)
                            this.$set(this,'vipData',this.vipData);
                        } else {
                            this.contentData.splice(this.nowColIndex,1)
                            this.$set(this,'contentData',this.contentData);
                        }
                        this.calcNum()
                        break;
                }
            },
            calcNum(){
                let num = 0;
                this.contentData.forEach((item)=>{
                    num += item.number;
                })
                this.vipData.forEach((item)=>{
                    num += item.number;
                })
                this.$store.state.wechatNum = num;
                this.$refs.wechatHeader.wechatNum()
                this.$refs.wechatFooter.wechatNumCount()
            },
            handleScroll(){
                //解决滚动条事件与触屏事件的冲突
                // e.stopPropagation()
                // e.preventDefault()
                let locked = false;
                window.addEventListener('touchmove', function(){
                    locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
                }, true);
                function stopTouchendPropagation(e){
                    e.stopPropagation();
                    window.removeEventListener('touchend', stopTouchendPropagation, true);
                    locked = false;
                }
            },
        },
        mounted(){
            this.calcNum()
        },
        created(){

        }
    }
</script>

<style scoped lang="less">
    .login{
        width: 100%;
        height: 100%;
        background: #eee;
        position: relative;
        .login-content{
            width: 100%;
            .login-child{
                width: 96%;
                display: flex;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                padding: 2%;
                .login-child-left{
                    width: 2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .login-child-img{
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: 10px;
                        background: green;
                        position: relative;
                        .login-child-flag{
                            width: 0.5rem;
                            height: 0.5rem;
                            border-radius: 50%;
                            background: red;
                            position: absolute;
                            top: -10%;
                            right: -10%;
                            color:#fff;
                            font-size: 0.2rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
                .login-child-right{
                    width: calc(100% - 2rem);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .login-child-top{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .login-child-name{
                            font-size: 0.4rem;
                            color:#666;
                        }
                        .login-child-time{
                            font-size: 0.35rem;
                            color:#999;
                        }
                    }
                    .login-child-bottom{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        .login-child-content{
                            width: 100%;
                            display: inline-block;
                            font-size: 0.35rem;
                            color:#999;
                            overflow:hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
            .login-child.vip{
                background: #f0f0f0;
            }
        }
        .login-fixed{
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.01);
            top: 0;
            left: 0;
            z-index: 999;
            display: none;
            /*display: flex;*/
            justify-content: center;
            align-items: center;
            .login-fixed-content{
                width: 25%;
                box-shadow: 1px 1px 2px 1px #eee;
                .login-fixed-child{
                    width: 100%;
                    padding: 5% 10%;
                    font-size: 0.4rem;
                    color:#333;
                    background: #fefefe;
                }
            }
        }
        .login-fixed.active{
            display: flex;
        }
    }
</style>