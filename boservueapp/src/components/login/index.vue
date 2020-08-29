<template>
    <div>
        <h1>this is zhou xiao bao</h1>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {}
        },
        methods:{

        },
        mounted(){
            this.common.log('dyk');
            this.common.read('dw')
        }
    }
</script>

<style scoped lang="less">
    div{
        h1{
            /*color:red;*/
        }
    }
</style>