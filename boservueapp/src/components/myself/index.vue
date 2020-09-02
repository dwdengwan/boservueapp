<template>
    <div class="all myself">
        <div class="header myself-header">
            <header-html></header-html>
        </div>
        <div class="content myself-content">

        </div>
        <div class="footer myself-footer">
            <footer-html></footer-html>
        </div>
    </div>
</template>

<script>
    import footerHtml from '../common/footerHtml';
    import headerHtml from '../common/headerHtml';
    export default {
        name: "myself",
        components:{
            footerHtml,headerHtml
        },
        data(){
            return {

            }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    .myself{
        width: 100%;
        background: #eee;
        .myself-content{
            width: 100%;
        }
    }
</style>