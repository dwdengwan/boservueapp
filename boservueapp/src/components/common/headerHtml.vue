<template>
    <div class="header-html">
        <div class="header-html-right">{{displayValue}}</div>
        <div class="header-html-left">
            <div class="header-html-search">搜索</div>
            <div class="header-html-more">更多</div>
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
          }
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
    }
</style>