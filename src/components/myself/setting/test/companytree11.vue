<template>
    <div class="all companytree">
        <div class="header companytree-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content companytree-content">
            <div class="companytree-child">
                <div class="companytree-childc" v-for="(child,index) in childData" :key="index" @touchend="handleClick(index)">
                    {{child}}
                </div>
            </div>
            <div class="companytree-fixed">

            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "workflowapp",
        components:{
            goBackHeader
        },
        data(){
            return {
                companytreeData:[
                    {
                        name:"中国",
                        id:"001000000000000000",
                        children:[
                            {
                                name:"湖南省",
                                id:"001001000000000000",
                                children:[
                                    {
                                        name:"长沙市",
                                        id:"001001001000000000",
                                        children:[
                                            {
                                                name:"宁乡县",
                                                id:"001001001001000000",
                                                children:[
                                                    {
                                                        name:'双江口镇',
                                                        id:"001001001001001000",
                                                        children:[
                                                            {
                                                                name:"长兴村",
                                                                id:"001001001001001001",
                                                                children:[]
                                                            }
                                                        ]
                                                    }
                                                ],
                                            }
                                        ]
                                    },
                                    {
                                        name:"常德市",
                                        id:"001001002000000000",
                                        children:[
                                            {
                                                name:"常德区",
                                                id:"001001002001000000",
                                                children:[
                                                    {
                                                        name:'常德镇',
                                                        id:"001001002001001000",
                                                        children:[
                                                            {
                                                                name:"常德村",
                                                                id:"001001002001001001",
                                                                children:[]
                                                            }
                                                        ]
                                                    }
                                                ],
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                name:"广东省",
                                id:"001002000000000000",
                                children:[
                                    {
                                        name:"深圳市",
                                        id:"001002001000000000",
                                        children:[
                                            {
                                                name:"龙岗区",
                                                id:"001002001001000000",
                                                children:[
                                                    {
                                                        name:'布吉街道',
                                                        id:"001002001001001000",
                                                        children:[
                                                            {
                                                                name:"长龙村",
                                                                id:"001002001001001001",
                                                                children:[]
                                                            }
                                                        ]
                                                    }
                                                ],
                                            }
                                        ]
                                    },
                                    {
                                        name:"惠州市",
                                        id:"001002002000000000",
                                        children:[
                                            {
                                                name:"常德区",
                                                id:"001002002001000000",
                                                children:[
                                                    {
                                                        name:'常德镇',
                                                        id:"001002002001001000",
                                                        children:[
                                                            {
                                                                name:"常德村",
                                                                id:"001002002001001001",
                                                                children:[]
                                                            }
                                                        ]
                                                    }
                                                ],
                                            }
                                        ]
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name:"美国",
                        id:"002000000000000000",
                        children:[
                            {
                                name:"美国州一",
                                id:"002001000000000000",
                                children:[
                                    {
                                        name:"美国市一",
                                        id:"002001001000000000",
                                        children:[
                                            {
                                                name:"美国县一",
                                                id:"002001001001000000",
                                                children:[
                                                    {
                                                        name:'美国镇一',
                                                        id:"002001001001001000",
                                                        children:[
                                                            {
                                                                name:"美国村一",
                                                                id:"002001001001001001",
                                                                children:[]
                                                            }
                                                        ]
                                                    }
                                                ],
                                            },
                                            {
                                                name:"美国县二",
                                                id:"002001001002000000",
                                                children:[
                                                    {
                                                        name:'美国镇一',
                                                        id:"002001001002001000",
                                                        children:[
                                                            {
                                                                name:"美国村一",
                                                                id:"002001001002001001",
                                                                children:[]
                                                            }
                                                        ]
                                                    }
                                                ],
                                            }
                                        ]
                                    },
                                    {
                                        name:"美国市二",
                                        id:"002001002000000000",
                                        children:[
                                            {
                                                name:"宁乡县",
                                                id:"002001001001000000",
                                                children:[
                                                    {
                                                        name:'双江口镇',
                                                        id:"002001001001001000",
                                                        children:[
                                                            {
                                                                name:"长兴村",
                                                                id:"002001001001001001",
                                                                children:[]
                                                            }
                                                        ]
                                                    }
                                                ],
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name:"广东省",
                                id:"002002000000000000",
                                children:[
                                    {
                                        name:"深圳市",
                                        id:"002002001000000000",
                                        children:[
                                            {
                                                name:"龙岗区",
                                                id:"002002001001000000",
                                                children:[
                                                    {
                                                        name:'布吉街道',
                                                        id:"002002001001001000",
                                                        children:[
                                                            {
                                                                name:"长龙村",
                                                                id:"002002001001001001",
                                                                children:[]
                                                            }
                                                        ]
                                                    }
                                                ],
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                // childData:[
                //     "国","省","市","区","街道","社区"
                // ],
                childData:[],
            }
        },
        methods:{
            getCompanyTreeName(data){
                console.log(data,'122')
                let treeData = data;
                let that = this;
                if (treeData.length > 0){
                    that.childData.push(treeData[0].name);
                    if (treeData[0].children.length > 0){
                        that.getCompanyTreeName(treeData[0].children)
                    }
                }
            },
            handleClick(i){
                console.log(i)
            }
        },
        mounted(){

        },
        created(){
            this.getCompanyTreeName(this.companytreeData)
        }
    }
</script>
<style lang="less" scoped>
    .companytree{
        .companytree-content{
            height: 94%;
            .companytree-child{
                display: flex;
                justify-content: space-around;
                align-items: center;
                .companytree-childc{
                    padding: 0 2%;
                    border-left:1px solid var(--font-color);
                }
                .companytree-childc:first-child{
                    border: 0;
                }
            }
        }
    }
</style>