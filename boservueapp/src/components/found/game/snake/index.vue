<template>
    <div class="all snake">
        <div class="header snake-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content snake-content"></div>
        <div class="footer snake-footer">
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