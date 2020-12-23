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