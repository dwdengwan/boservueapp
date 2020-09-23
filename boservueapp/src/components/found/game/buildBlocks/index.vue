<template>
    <div class="all build-blocks">
        <div class="header build-blocks-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content build-blocks-content"></div>
        <div class="footer build-blocks-footer">
            <game-footer></game-footer>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import gameFooter from '@/components/common/gameFooter.vue';
    export default {
        name: "index",
        components:{
            goBackHeader,
            gameFooter
        },
    }
</script>

<style scoped lang="less">

</style>