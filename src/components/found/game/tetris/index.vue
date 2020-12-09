<template>
    <div class="all tetris">
        <div class="header tetris-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content tetris-content"></div>
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