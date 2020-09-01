<template>
    <div class="footer-html">
        <div class="footer-html-child" v-for="(item,index) in items" :key="index">
            <div class="footer-html-img"></div>
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
                        path:'',
                    },
                    {
                        name:'通讯录',
                        path:'',
                    },
                    {
                        name:'发现',
                        path:'',
                    },
                    {
                        name:'我',
                        path:'',
                    }
                ]
            }
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
        width: 25%;
        .footer-html-img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            /*background: rgb(0,200,0);*/
            background: #666;
        }
        .footer-html-title{
            text-align: center;
            /*color:rgb(0,200,0);*/
            color: #666;
            font-size:0.4rem;
        }
    }
}
</style>