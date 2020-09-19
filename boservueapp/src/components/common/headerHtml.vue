<template>
    <div class="header-html" @touchend="handleTouchHtml">
        <div class="header-html-right">{{displayValue}}</div>
        <div class="header-html-left">
            <div class="header-html-search" @touchend="handleSearch">搜索</div>
            <div class="header-html-more" @touchend="handleTouchMore($event)">更多</div>
        </div>
        <div class="header-html-fixed" v-show="showHtmlFixed">
            <div class="header-html-fixed-child">添加好友</div>
            <div class="header-html-fixed-child">添加群聊</div>
            <div class="header-html-fixed-child">添加好友</div>
            <div class="header-html-fixed-child">添加群聊</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerHtml",
        data(){
            return {
                displayValue:'',
                number:0,
                showHtmlFixed:false,
            }
        },
        created(){

        },
        mounted(){
            this.wechatNum()
        },
        methods:{
          wechatNum(){
              this.number = this.$store.state.wechatNum;
              if (localStorage.getItem('isactive')== null || localStorage.getItem('isactive') == '0'){
                  this.displayValue = `微信（${this.number}）`;
              }else if (localStorage.getItem('isactive') == '1'){
                  this.displayValue = '通讯录';
              } else if (localStorage.getItem('isactive') == '2'){
                  this.displayValue = '发现';
              } else if (localStorage.getItem('isactive') == '3'){
                  this.displayValue = '我';
              }
          },
          handleTouchHtml(){
            this.showHtmlFixed = false;
          },
          handleTouchMore(e){
              e.stopPropagation();
              this.showHtmlFixed = true;
          },
          handleSearch(){
              this.$router.push({path:"/search"})
          },
        },
    }
</script>

<style scoped lang="less">
    .header-html{
        width: 96%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2%;
        font-size: 0.4rem;
        color:#666;
        .header-html-left{
            width: 50%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            div{
                padding: 0 0 0 5%;
                width: 20%;
                text-align: right;
            }
        }
        .header-html-fixed{
            position: fixed;
            top: 7%;
            right: 2%;
            width: 20%;
            background: #f0f0f0;
            font-size: 0.3rem;
            z-index: 1126;
            .header-html-fixed-child{
                width: 80%;
                padding: 5% 10%;
                color:#333;
            }
        }
        .header-html-fixed:before {
            /*加尖三角形*/
            content:"";
            position: absolute;
            top: -10%;
            right: 4%;
            background: #fff;
            /*width: 0.2rem;*/
            /*height: 0.2rem;*/
            border-left: 0.15rem solid transparent;
            border-right: 0.15rem solid transparent;
        }
    }
</style>