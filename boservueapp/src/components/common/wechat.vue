<template>
    <div class="wechat">
        <div class="wechat-header">
            <div class="wechat-header-back" @touchend="handleClick">
                <span class="wechat-header-goback"></span>
                <span class="wechat-header-name">{{name}}</span>
            </div>
            <div class="wechat-header-dd">
                <span>...</span>
            </div>
        </div>
        <div class="wechat-content"
             @touchend="handleContentClick"
             :class="isactive?'active':''">
            <div class="wechat-child" v-for="item in wechatData" :key="item.id" ref="wechatchild">
                <div class="wechat-child-time">
                    {{item.time}}
                </div>
                <div class="wechat-child-right">
                    <div class="wechat-child-content">{{item.mySay}}</div>
                    <div class="wechat-child-img"></div>
                </div>
                <div class="wechat-child-left">
                    <div class="wechat-child-img"></div>
                    <div class="wechat-child-content">{{item.youSay}}</div>
                </div>
            </div>
        </div>
        <div class="wechat-footer display">
            <content-footer @on-updata="upData" :contentFooterObj="contentFooterObj"></content-footer>
        </div>
    </div>
</template>

<script>
    import contentFooter from './contentFooter.vue';
    export default {
        name: "wechat",
        components:{
            contentFooter,
        },
        data(){
            return{
                wechatData:[],//内容区的数据
                sendValue:'',//发送的内容
                onClickNum:0,//点击发送的次数
                isactive:false,
                timer:null,
                contentFooterObj:{
                    num:1,
                },
                name:'豆豆',
            }
        },
        methods:{
            handleClick(){
                let type = this.$route.query.type;
                console.log(type)
                if (type == '0'){
                    this.$router.push({path:'/',query:{}})
                } else if (type == '1'){
                    this.$router.push({path:'/addrbook',query:{}})
                }
            },
            handleContentClick(){
                clearInterval(this.timer)
                this.isactive = true;
                this.timer = setInterval(()=>{
                    this.isactive = false;
                },3000)
            },
            upData(val){
                this.$set(this,'wechatData',val)
            }
        },
        created(){
            let name = this.$route.query.name;
            this.name = name;
        },
        destroyed(){
            sessionStorage.setItem('login','0')
        }
    }
</script>

<style scoped lang="less">
 /*$myColor:red,*/
 /*.wechat*/
    /*background: $myColor,*/
 .wechat{
     width: 96%;
     height: 100%;
     .wechat-header{
         width: 100%;
         height: 6%;
         background: #eee;
         display: flex;
         justify-content: space-between;
         align-items: center;
         font-size: 0.6rem;
         padding: 0 2%;
         .wechat-header-back{
             display: flex;
             justify-content: flex-start;
             align-items: center;
             width: 70%;
             .wechat-header-goback{
                 width: 0.25rem;
                 height: 0.25rem;
                 border-bottom: 2px solid #666;
                 border-left: 2px solid #666;
                 transform: rotate(45deg);
                 display: inline-block;
             }
             .wechat-header-name{
                 font-size: 0.4rem;
                 color:#666;
                 margin:0 2%;
             }
         }
     }
     .wechat-content{
         width: 100%;
         height: 84%;
         padding: 0 2%;
         background: #efefef;
         overflow-y: auto;
         .wechat-child{
             font-size: 0.4rem;
             .wechat-child-time{
                 color:#999;
                 text-align: center;
                 font-size: 0.35rem;
             }
             .wechat-child-img{
                 width: 1.2rem;
                 height: 1.2rem;
                 border-radius: 10px;
                 background: green;
             }
             .wechat-child-content{
                 max-width: 70%;
                 background: #fff;
                 padding: 3%;
                 margin-left: 3%;
                 margin-right: 3%;
                 border-radius: 10px;
                 position: relative;
                 word-wrap:break-word;
             }
             .wechat-child-content:before {
                 /*加尖三角形*/
                 content:"";
                 position: absolute;
                 top: 45%;
                 width: 0;
                 height: 0;
                 border-top: 0.15rem solid transparent;
                 border-bottom: 0.15rem solid transparent;
             }
             .wechat-child-left{
                 display: flex;
                 justify-content: flex-start;
                 align-items: center;
                 padding: 2% 0;
                 .wechat-child-img{
                     background: #fff;
                 }
                 .wechat-child-content:before {
                     right: 100%;
                     border-right: 0.3rem solid #fff;
                 }
             }
             .wechat-child-right{
                 display: flex;
                 justify-content: flex-end;
                 align-items: center;
                 padding: 2% 0;
                 .wechat-child-content{
                     background: green;
                     color:#fff;
                 }
                 .wechat-child-content:before {
                     left: 100%;
                     border-left: 0.3rem solid green;
                 }
             }
         }
     }
     .wechat-content.active{
         /*background: green;*/
         background: #fff;
         opacity: 1;
         transition: opacity 2s;
     }
     .wechat-footer{
         width: 100%;
         height: 10%;
         background: #eee;
         padding: 0 2%;
         input{
             height: 60%;
             width: 60%;
             border-radius: 0.1rem;
             font-size: 0.4rem;
         }
         button{
             width: 20%;
             height: 60%;
             background: var(--main-bg-color);
             color:#fff;
             border-radius: 0.1rem;
         }
     }
 }
</style>