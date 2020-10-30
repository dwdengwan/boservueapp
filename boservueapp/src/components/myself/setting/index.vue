<template>
    <div class="all setting">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div class="setting-content content">
            <goToNext :myselfData="myselfData"></goToNext>
            <div class="setting-opper">切换账号</div>
            <div class="setting-opper">退出</div>
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
                        name:"账号与安全",
                        id:'10002',
                        iskongge:'1',
                        url:"/myself",
                    },
                    {
                        name:"新消息提醒",
                        id:'10003',
                        iskongge:'0',
                        url:"/myself",
                    },
                    {
                        name:"勿扰模式",
                        id:'10004',
                        iskongge:'0',
                        url:"/myself",
                    },
                    {
                        name:"聊天",
                        id:'10005',
                        iskongge:'0',
                        url:"/myself",
                    },
                    {
                        name:"隐私",
                        id:'10006',
                        iskongge:'0',
                        url:"/myself",
                    },
                    {
                        name:"通用",
                        id:'10007',
                        iskongge:'1',
                        url:"/myself/setting",
                    },
                    {
                        name:"关于微信",
                        id:'10008',
                        iskongge:'0',
                        url:"/myself",
                    },
                    {
                        name:"帮助与反馈",
                        id:'10009',
                        iskongge:'1',
                        url:"/myself",
                    },
                    {
                        name:"插件",
                        id:'10010',
                        iskongge:'0',
                        url:"/myself",
                    },
                    {
                        name:"更换主题",
                        id:'10011',
                        iskongge:'1',
                        url:"/myself/setting/changeBgColor",
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