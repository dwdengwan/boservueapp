<template>
    <div class="all kline">
        <div class="header kline-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content kline-content"></div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "index",
        components:{
            goBackHeader,
        },
    }
</script>

<style scoped>

</style>