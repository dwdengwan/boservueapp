<template>
    <div class="all login">
        <div class="header login-header">

        </div>
        <div class="content login-content">
            <div class="login-child" v-for="(content,index) in contentData" :key="index">
                <div class="login-child-left">
                    <div class="login-child-img" :style="{background:$common.randomColor()}"></div>
                </div>
                <div class="login-child-right">
                    <div class="login-child-top">
                        <span class="login-child-name">{{content.name}}</span>
                        <span class="login-child-time">{{content.time}}</span>
                    </div>
                    <div class="login-child-bottom">
                        <span class="login-child-content">{{content.content}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer login-footer">
            <footer></footer>
        </div>
    </div>
</template>

<script>
    import footer from '../../components/common/footer';
    export default {
        name: "index",
        components:{
            footer
        },
        data(){
            return {
                contentData:[
                    {
                      name:"豆豆",
                      time:"周五",
                      content:"豆豆说要有自己的主见，要成熟。自己决定做的事，就一定要做到最好。要么就不做"
                    },
                    {
                        name:"平平",
                        time:"周四",
                        content:"平平说要有自己的主见，要成熟。"
                    },
                    {
                        name:"安安",
                        time:"周三",
                        content:"平平说要有自己的主见，要成熟。"
                    },
                    {
                        name:"快快",
                        time:"周二",
                        content:"快快说要有自己的主见，要成熟。"
                    },
                    {
                        name:"乐乐",
                        time:"周一",
                        content:"乐乐说要有自己的主见，要成熟。"
                    },
                    {
                        name:"贝贝",
                        time:"周日",
                        content:"贝贝说要有自己的主见，要成熟。"
                    },
                    {
                        name:"晶晶",
                        time:"周六",
                        content:"晶晶说要有自己的主见，要成熟。"
                    },
                    {
                        name:"欢欢",
                        time:"周五",
                        content:"欢欢说要有自己的主见，要成熟。"
                    },
                    {
                        name:"莹莹",
                        time:"周四",
                        content:"莹莹说要有自己的主见，要成熟。"
                    },
                    {
                        name:"妮妮",
                        time:"周三",
                        content:"妮妮说要有自己的主见，要成熟。"
                    },
                ]
            }
        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
    .login{
        width: 100%;
        background: #eee;
        .login-content{
            width: 100%;
            .login-child{
                width: 96%;
                display: flex;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                padding: 2%;
                .login-child-left{
                    width: 2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .login-child-img{
                        width: 1.5rem;
                        height: 1.5rem;
                        border-radius: 10px;
                        background: green;
                    }
                }
                .login-child-right{
                    width: calc(100% - 2rem);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .login-child-top{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .login-child-name{
                            font-size: 0.4rem;
                            color:#666;
                        }
                        .login-child-time{
                            font-size: 0.35rem;
                            color:#999;
                        }
                    }
                    .login-child-bottom{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        .login-child-content{
                            width: 100%;
                            display: inline-block;
                            font-size: 0.35rem;
                            color:#999;
                            overflow:hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
        }
    }
</style>