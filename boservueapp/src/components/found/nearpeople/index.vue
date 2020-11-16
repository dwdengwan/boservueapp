<template>
    <div class="all nearpeople">
        <div class="header nearpeople-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content nearpeople-content">
            <!--https://www.runoob.com/try/demo_source/mov_bbb.mp4-->
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "index",
        components:{
            goBackHeader,
        }
    }
</script>

<style scoped lang="less">
.nearpeople{
    .nearpeople-content{
        height: 94%;
    }
}
</style>