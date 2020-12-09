<template>
    <div class="tip2 all">
        <div class="header tip2-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content tip2-content">

        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "tip2",
        components:{
            goBackHeader
        },
    }
</script>

<style scoped lang="less">
    .tip2{
        .tip2-content{
            height: 94%;
            overflow-y: auto;
        }
    }
</style>