<template>
    <div class="all shake">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <custom-element></custom-element>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "friend",
        components:{
            goBackHeader
        },
    }
</script>

<style scoped lang="less">
    .shake{
        width: 100%;
        background: #eee;
    }
</style>