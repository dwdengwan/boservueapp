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
                    <div class="search-child-left">
                        <div class="search-child-img"></div>
                        <div class="search-child-name">{{name}}</div>
                    </div>
                    <div class="search-child-right" @touchend="addFriend"></div>
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
                name:'',
            }
        },
        methods:{
            upData(val){
                this.$set(this,'showResult',val.showResult);
                this.$set(this,'name',val.text)
            },
            addFriend(){
                let query = { name : ""};
                query.name = this.name;
                this.$router.push({path:'/addrbook',query})
                console.log('dyk')
            },
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
        .search-content-result{
            padding: 2%;
            width: 96%;
            .search-result-child{
                padding: 2%;
                width: 96%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .search-child-left{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 80%;
                    .search-child-img{
                        width: 1.2rem;
                        height: 1.2rem;
                        border-radius: 10px;
                        background: green;
                    }
                    .search-child-name{
                        font-size:0.4rem;
                        margin: 0 5%;
                    }
                }
                .search-child-right {
                    width: 0.8rem;
                    height: 0.8rem;
                    color: #27e38b;
                    transition: color .25s;
                    position: relative;
                }
                .search-child-right::before{
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 0.6rem;
                    margin-left: -0.4rem;
                    margin-top: -5px;
                    border-top: 0.1rem solid;
                }

                .search-child-right::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    height: 0.6rem;
                    margin-left: -5px;
                    margin-top: -0.4rem;
                    border-left: 0.1rem solid;
                }

            }
        }
    }
}
</style>