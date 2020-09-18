<template>
    <div class="search all">
        <div class="search-header header">
            <go-back-header></go-back-header>
        </div>
        <div class="search-content-area">
            <content-footer
                class="search-content-footer"
                @on-updata-search="upData"
                :contentFooterObj="contentFooterObj">
            </content-footer>
        </div>
        <div class="search-content content">
            <div class="search-content-result" v-show="showResult">
                <div class="search-result-child">
                    111111skdkasdjkfjaskldfjklasd
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GoBackHeader from "../common/goBackHeader";
    import contentFooter from "../common/contentFooter"
    export default {
        name: "search",
        components: {GoBackHeader,contentFooter},
        data(){
            return {
                contentFooterObj:{
                    num:3,
                },
                showResult:false,
            }
        },
        methods:{
            upData(val){
                console.log(val);
                this.$set(this,'showResult',val.showResult)
            }
        },
    }
</script>

<style scoped lang="less">
.search{
    .search-content-area{
        width: 100%;
        height: 10%;
        .search-content-footer{
            background-color: #fff;
        }
    }
    .search-content{
        width: 100%;
        height: 84%;
    }
}
</style>