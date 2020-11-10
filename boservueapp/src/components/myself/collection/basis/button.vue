<template>
    <div class="all btn">
        <div class="header btn-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content btn-content">
            <!--<dw-button type="error" @touchend="handleClick">1211111113</dw-button>-->
            <!--<dw-button type="success" size="bigger">456</dw-button>-->
            <!--<dw-button type="info">789</dw-button>-->
            <!--<dw-button type="text">789</dw-button>-->
            <!--<dw-button disabled @touchend="handleClick">send</dw-button>-->
            <!--<dw-button loading>go to next page</dw-button>-->
            <!--<dw-button>-->
                <!--<div style="background-color: #00c800;border-radius: 10px;padding: 0.2rem;">大熊猫</div>-->
            <!--</dw-button>-->
            <dw-date></dw-date>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import dwButton from '@/components/common/component/basis/button.vue'
    import dwDate from '@/components/common/component/form/date.vue'
    export default {
        name: "btn",
        components:{
            goBackHeader,dwButton,dwDate
        },
        methods:{
            handleClick(){
                alert('点我干嘛 再点试试')
            }
        }
    }
</script>

<style scoped lang="less">
.btn{
    .btn-content{
        height: 94%;
    }
}
</style>