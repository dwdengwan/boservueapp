<template>
    <div class="all found">
        <div class="header found-header">
            <header-html></header-html>
        </div>
        <div class="content found-content">

        </div>
        <div class="footer found-footer">
            <footer-html></footer-html>
        </div>
    </div>
</template>

<script>
    import footerHtml from '../common/footerHtml';
    import headerHtml from '../common/headerHtml';
    export default {
        name: "found",
        components:{
            footerHtml,headerHtml
        },
        data(){
            return {
                contentData:[
                    {
                        name:"豆豆",
                        time:"周五",
                        content:"豆豆说要有自己的主见，要成熟。自己决定做的事，就一定要做到最好。要么就不做"
                    },
                    {
                        name:"平平",
                        time:"周四",
                        content:"平平说要有自己的主见，要成熟。"
                    },
                    {
                        name:"安安",
                        time:"周三",
                        content:"平平说要有自己的主见，要成熟。"
                    },
                    {
                        name:"快快",
                        time:"周二",
                        content:"快快说要有自己的主见，要成熟。"
                    },
                    {
                        name:"乐乐",
                        time:"周一",
                        content:"乐乐说要有自己的主见，要成熟。"
                    },
                    {
                        name:"贝贝",
                        time:"周日",
                        content:"贝贝说要有自己的主见，要成熟。"
                    },
                    {
                        name:"晶晶",
                        time:"周六",
                        content:"晶晶说要有自己的主见，要成熟。"
                    },
                    {
                        name:"欢欢",
                        time:"周五",
                        content:"欢欢说要有自己的主见，要成熟。"
                    },
                    {
                        name:"莹莹",
                        time:"周四",
                        content:"莹莹说要有自己的主见，要成熟。"
                    },
                    {
                        name:"妮妮",
                        time:"周三",
                        content:"妮妮说要有自己的主见，要成熟。"
                    },
                ]
            }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    .found{
        width: 100%;
        background: #eee;
        .found-content{
            width: 100%;
        }
    }
</style>