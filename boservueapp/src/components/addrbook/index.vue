<template>
    <div class="all addrbook">
        <div class="header addrbook-header">
            <header-html></header-html>
        </div>
        <div class="content addrbook-content">

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
        background: #eee;
        .addrbook-content{
            width: 100%;

        }
    }
</style>