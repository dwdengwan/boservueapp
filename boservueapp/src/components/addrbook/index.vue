<template>
    <div class="all addrbook">
        <div class="header addrbook-header">
            <header-html></header-html>
        </div>
        <div class="content addrbook-content">
            <div class="addrbook-child" v-for="(item,index) in addrbookData" :key="item.id">
                <div class="addrbook-kongge" v-if="index > 2">{{item.orderCode}}</div>
                <div class="addrbook-auther">
                    <span class="addrbook-child-img" :style="{background:$common.randomColor()}"></span>
                    <span class="addrbook-name">{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="footer addrbook-footer">
            <footer-html></footer-html>
        </div>
    </div>
</template>

<script>
    import footerHtml from '../common/footerHtml';
    import headerHtml from '../common/headerHtml';
    export default {
        name: "addrbook",
        components:{
            footerHtml,headerHtml
        },
        data(){
            return {
                addrbookData:[
                    {
                        id:"10001",
                        name:'A豆豆',
                        orderCode:'A',
                    },
                    {
                        id:"10002",
                        name:'A豆豆',
                        orderCode:'A',
                    },
                    {
                        id:"10003",
                        name:'A豆豆',
                        orderCode:'A',
                    },
                    {
                        id:"10004",
                        name:'A豆豆',
                        orderCode:'A',
                    },
                    {
                        id:"10005",
                        name:'A豆豆',
                        orderCode:'A',
                    },
                    {
                        id:"10006",
                        name:'A豆豆',
                        orderCode:'A',
                    },
                    {
                        id:"10007",
                        name:'A豆豆',
                        orderCode:'A',
                    },
                ],
            }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    .addrbook{
        width: 100%;
        height: 100%;
        background: #eee;
        .addrbook-content{
            width: 100%;
            height: 84%;
            .addrbook-child{
                width: 100%;
                .addrbook-kongge{
                    height: 2%;
                    width: 96%;
                    background: #eee;
                    font-size: 0.4rem;
                    padding: 1% 2%;
                }
                .addrbook-auther{
                    width: 96%;
                    padding: 2%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .addrbook-child-img{
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: 10px;
                        background: green;
                        display: inline-block;
                    }
                    .addrbook-name{
                        font-size: 0.4rem;
                        padding: 0 2%;
                    }
                }
            }
        }
    }
</style>