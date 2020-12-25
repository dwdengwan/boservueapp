<template>
    <div class="all workflowapp">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <div class="workflowapp-content content">
            <div class="workflowapp-tt">
                <span>流程事项</span>
                <select name="2" id="workflow-title">
                    <option value="1">请假</option>
                    <option value="2">年休</option>
                </select>
            </div>
            <div class="workflowapp-tt">
                <span>申请负责人</span>
                <select name="2" id="workflow-title2">
                    <option value="1">主管</option>
                    <option value="2">直属领导</option>
                </select>
            </div>
            <div class="workflowapp-tt">
                <span>申请地址</span>
                <div class="workflowapp-addr">
                    世界
                </div>
            </div>
            <div class="workflowapp-tt">
                <span>申请日期</span>
                <input type="date">
            </div>
            <div class="workflowapp-tt">
                <span>申请原因</span>
                <textarea></textarea>
            </div>
        </div>
        <div class="footer workflowapp-footer">
            <div class="workflowapp-right"></div>
            <div class="workflowapp-save">保存</div>
            <div class="workflowapp-submit">提交</div>
            <div class="workflowapp-left"></div>
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

            }
        },
        methods:{

        },
        mounted(){

        },
        created(){
            let data = [
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
            ];
            console.log(data);
        }
    }
</script>

<style scoped lang="less">
    .workflowapp{
        width: 100%;
        .workflowapp-content{
            width: 96%;
            padding: 0 2%;
            .workflowapp-tt{
                padding: 2% 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                input,textarea,select{
                    width: 60%;
                    padding: 2%;
                    border-radius: 0.1rem;
                }
            }
            .workflowapp-addr{
                width: 60%;
                padding: 2%;
                justify-content: flex-end;

                -webkit-writing-mode: horizontal-tb !important;
                text-rendering: auto;
                color: black;
                letter-spacing: normal;
                word-spacing: normal;
                text-transform: none;
                text-indent: 0px;
                text-shadow: none;
                display: inline-block;
                text-align: start;
                -webkit-appearance: menulist;
                box-sizing: border-box;
                align-items: center;
                white-space: pre;
                -webkit-rtl-ordering: logical;
                background-color: white;
                cursor: default;
                margin: 0em;
                font: 400 13.3333px Arial;
                border-radius: 0px;
                border: 1px solid rgb(169,169,169);
                border-image: initial;
                .workflowapp-addr-1{
                    border-left: 2px solid #000000;
                    border-bottom: 2px solid #000000;
                    height: 10px;
                    width: 10px;
                    transform: translate(2px, -2px) rotate(-45deg);
                    border-right: 2px solid transparent;
                    border-top: 2px solid transparent;
                    display: inline-block;
                }
            }
        }
        .workflowapp-footer{
            display: flex;
            justify-content: space-around;
            align-items: center;
            .workflowapp-submit,
            .workflowapp-save{
                width: 30%;
                background-color: #418045;
                padding: 2% 0;
                border-radius: 0.1rem;
                color: #fff;
                text-align: center;
            }
            .workflowapp-submit{
                background-color: gold;
            }
            .workflowapp-right{
                width: 0.4rem;
                height: 0.4rem;
                border-top: 2px solid #999;
                border-right: 2px solid #999;
                transform: rotate(-135deg);
            }
            .workflowapp-left{
                width: 0.4rem;
                height: 0.4rem;
                border-top: 2px solid var(--font-color);
                border-right: 2px solid var(--font-color);
                transform: rotate(45deg);
            }
        }
    }
</style>