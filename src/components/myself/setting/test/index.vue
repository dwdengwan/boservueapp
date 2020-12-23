<template>
    <div class="all setting">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div class="setting-content content">
            <goToNext :myselfData="myselfData"></goToNext>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import goToNext from '@/components/common/goToNext.vue'
    export default {
        name: "setting",
        components:{
            goBackHeader,goToNext
        },
        data(){
            return {
                myselfData:[
                    {
                        name:"H5标签",
                        id:'10001',
                        iskongge:'1',
                        url:"/myself/setting/test/H5",
                    },
                    {
                        name:"pc工作流",
                        id:'10002',
                        iskongge:'0',
                        url:"/myself/setting/test/workflow",
                    },
                    {
                        name:"移动工作流",
                        id:'10003',
                        iskongge:'1',
                        url:"/myself/setting/test/workflowapp",
                    },
                ],
            }
        },
        methods:{

        },
        mounted(){

        },
        created(){

        }
    }
</script>

<style scoped lang="less">
    .setting{
        width: 100%;
        .setting-content{
            width: 100%;
            height: 94%;
            overflow: auto;
            .setting-opper{
                text-align: center;
                padding: 4% 2%;
                width: 96%;
                font-weight: bolder;
                border-bottom: 1px solid #eee;
            }
        }
    }
</style>