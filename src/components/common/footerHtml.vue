<template>
    <div class="footer-html">
        <div class="footer-html-child" v-for="(item,index) in items" :key="index" @touchend="handleClick(index)" :class="isactive == index  ? 'active':''">
            <div class="footer-html-img">
                <div class="footer-html-flag" v-if="index == 0 && num !== 0">
                    <span>{{num}}</span>
                </div>
            </div>
            <div class="footer-html-title">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer-html",
        data(){
            return {
                items:[
                    {
                        name:'微信',
                        path:'/',
                    },
                    {
                        name:'通讯录',
                        path:'/addrbook',
                    },
                    {
                        name:'发现',
                        path:'/found',
                    },
                    {
                        name:'我',
                        path:'/myself',
                    }
                ],
                isactive:0,
                num:0,
            }
        },
        methods:{
            handleClick(i){
                this.isactive = i;
                localStorage.setItem('isactive',this.isactive);//被点击的底部图标
                this.$router.push({path: this.items[i].path, query: {}})
            },
            wechatNumCount(){
                if (localStorage.getItem('isactive') == null){
                    this.isactive = 0;
                } else{
                    this.isactive = parseInt(localStorage.getItem('isactive'));
                }
                // if (localStorage.getItem('wechatnum')== null || parseInt(localStorage.getItem('wechatnum')) == 0){
                //     this.num = 0;
                // } else {
                //     this.num = parseInt(localStorage.getItem('wechatnum')) > 99 ? '99+': parseInt(localStorage.getItem('wechatnum'));
                // }
                this.num = this.$store.state.wechatNum;
            }
        },
        created(){
            if (this.$route.query.goBackTo !== undefined){
                let num = parseInt(this.$route.query.goBackTo);
                this.handleClick(num)
            }
        },
        mounted(){
            this.wechatNumCount()
        }
    }
</script>

<style scoped lang="less">
.footer-html{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    .footer-html-child{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 25%;
        height: 100%;
        .footer-html-img{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            /*background: rgb(0,200,0);*/
            background: #fff;
            position: relative;
            .footer-html-flag{
                width: 0.4rem;
                height: 0.4rem;
                line-height: 0.4rem;
                text-align: center;
                border-radius: 50%;
                background: red;
                position: absolute;
                top: -5%;
                right: -5%;
                color:#fff;
                font-size: 0.3rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .footer-html-title{
            text-align: center;
            font-size:0.35rem;
        }
    }
    .footer-html-child.active{
        .footer-html-img{
            background: rgb(0,200,0);
        }
        .footer-html-title{
            color:rgb(0,200,0);
        }
    }
}
</style>