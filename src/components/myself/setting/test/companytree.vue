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
            <div class="companytree-fixed content">
                <div class="companytree-fixedc" v-for="(child,index) in childData" :key="index">
                    <div class="companytree-fixedc1">
                        <div class="companytree-fixedc11">1</div>
                        <div class="companytree-fixedc11">2</div>
                        <div class="companytree-fixedc11">3</div>
                        <div class="companytree-fixedc11">4</div>
                        <div class="companytree-fixedc11">5</div>
                        <div class="companytree-fixedc11">6</div>
                        <div class="companytree-fixedc11">7</div>
                        <div class="companytree-fixedc11">8</div>
                        <div class="companytree-fixedc11">9</div>
                        <div class="companytree-fixedc11">0</div>
                        <div class="companytree-fixedc11">1</div>
                        <div class="companytree-fixedc11">2</div>
                        <div class="companytree-fixedc11">3</div>
                        <div class="companytree-fixedc11">4</div>
                        <div class="companytree-fixedc11">5</div>
                        <div class="companytree-fixedc11">6</div>
                        <div class="companytree-fixedc11">7</div>
                        <div class="companytree-fixedc11">8</div>
                        <div class="companytree-fixedc11">9</div>
                        <div class="companytree-fixedc11">0</div>
                        <div class="companytree-fixedc11">1</div>
                        <div class="companytree-fixedc11">2</div>
                        <div class="companytree-fixedc11">3</div>
                        <div class="companytree-fixedc11">4</div>
                        <div class="companytree-fixedc11">5</div>
                        <div class="companytree-fixedc11">6</div>
                        <div class="companytree-fixedc11">7</div>
                        <div class="companytree-fixedc11">8</div>
                        <div class="companytree-fixedc11">9</div>
                        <div class="companytree-fixedc11">0</div>
                    </div>
                </div>
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
                companytreeData: [
                    {
                        name: "湖南省",
                        id: "001001000000000000",
                        children: [
                            {
                                name: "长沙市",
                                id: "001001001000000000",
                                children: [
                                    {
                                        name: "宁乡县",
                                        id: "001001001001000000",
                                        children: [],
                                    }
                                ]
                            },
                            {
                                name: "常德市",
                                id: "001001002000000000",
                                children: [
                                    {
                                        name: "常德区",
                                        id: "001001002001000000",
                                        children: [],
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        name: "广东省",
                        id: "001002000000000000",
                        children: [
                            {
                                name: "深圳市",
                                id: "001002001000000000",
                                children: [
                                    {
                                        name: "龙岗区",
                                        id: "001002001001000000",
                                        children: [],
                                    }
                                ]
                            },
                            {
                                name: "惠州市",
                                id: "001002002000000000",
                                children: [
                                    {
                                        name: "常德区",
                                        id: "001002002001000000",
                                        children: [],
                                    }
                                ]
                            },
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
                console.log(data)
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
            width: 100%;
            .companytree-child{
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 7%;
                .companytree-childc{
                    width: 33.3%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-left:1px solid var(--font-color);
                }
                .companytree-childc:first-child{
                    border: 0;
                }
            }
            .companytree-fixed{
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 93%;
                /*border: 1px solid var(--font-color);*/
                .companytree-fixedc{
                    height: 100%;
                    width: 33.3%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .companytree-fixedc1{
                        width: 100%;
                        height: 100%;
                        .companytree-fixedc11{
                            width: calc(100% - 1px);
                            padding: 10% 0;
                            text-align: center;
                            background-color:goldenrod;
                            border-left:1px solid var(--font-color);
                        }
                    }
                    .companytree-fixedc11:nth-child(2n-1){
                        background-color: gold;
                    }
                }
            }
            .companytree-fixed :first-child .companytree-fixedc1 .companytree-fixedc11{
                border: 0;
                width: 100%;
            }
        }
    }
</style>