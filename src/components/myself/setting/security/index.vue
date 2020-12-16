<template>
    <div class="all security">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div class="security-content content">
            <goToNext :myselfData="privacyData"></goToNext>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import goToNext from '@/components/common/goToNext.vue'
    export default {
        name: "security",
        components:{
            goBackHeader,goToNext
        },
        data(){
            return {
                privacyData:[
                    {
                        name:"手势密码设置",
                        id:'10001',
                        iskongge:'1',
                        url:"/myself/security/password",
                    },
                    {
                        name:"导航栏一",
                        id:'10002',
                        iskongge:'0',
                        url:"/myself/security/navbarone",
                    },
                    {
                        name:"导航栏二",
                        id:'10003',
                        iskongge:'1',
                        url:"/myself/security/navbartwo",
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
    .security{
        width: 100%;
        .security-content{
            width: 100%;
            height: 94%;
            overflow: auto;
        }
    }
</style>