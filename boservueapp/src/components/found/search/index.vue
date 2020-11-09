<template>
    <div class="all search">
        <div class="header search-header">
            <div class="search-header-name">违约模拟</div>
            <div class="search-header-goback" @touchend="handleGoBack"></div>
        </div>
        <div class="content search-content">
            <div class="search-flagpool">
                <div class="search-flagpool-right">标签池</div>
                <div class="search-flagpool-left">
                    <div class="search-flagpool-leftt">主题筛选</div>
                    <div class="search-flagpool-lefta"></div>
                </div>
            </div>
            <div class="search-flagarea">
                <div class="search-flagarea-father">
                    <div class="search-flagarea-child" v-for="(flag,index) in flagData" :key="index">
                        {{flag.name}}
                    </div>
                </div>
            </div>
            <div class="search-myself-flag">
                我选择的标签
            </div>
            <div class="search-myselfarea">
                <div class="search-myselfarea-father">
                    <div class="search-myselfarea-child">
                        <div>时尚时尚最时尚3</div>
                        <div class="search-myselfarea-child-colse"></div>
                    </div>
                    <div class="search-myselfarea-child">
                        <div>时尚时尚最时尚3</div>
                        <div></div>
                    </div>
                    <div class="search-myselfarea-child">
                        <div>时尚时尚最时尚3</div>
                        <div></div>
                    </div>
                    <div class="search-myselfarea-child">
                        <div>时尚时尚最时尚3</div>
                        <div></div>
                    </div>
                    <div class="search-myselfarea-child">
                        <div>时尚时尚最时尚3</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                flagData:[
                    {
                        id:'10001',
                        name:'时尚',
                        flag:0,
                    },
                    {
                        id:'10002',
                        name:'时尚2',
                        flag:0,
                    },
                    {
                        id:'10003',
                        name:'时尚时尚时尚最时尚3',
                        flag:0,
                    },
                    {
                        id:'10004',
                        name:'时尚4',
                        flag:0,
                    },
                    {
                        id:'10005',
                        name:'时尚5',
                        flag:0,
                    },
                    {
                        id:'10006',
                        name:'时尚6',
                        flag:0,
                    },
                    {
                        id:'10007',
                        name:'时尚7',
                        flag:0,
                    },
                    {
                        id:'10008',
                        name:'时尚8',
                        flag:0,
                    },
                    {
                        id:'10009',
                        name:'时尚9',
                        flag:0,
                    },
                    {
                        id:'10010',
                        name:'时尚10',
                        flag:0,
                    },
                    {
                        id:'10011',
                        name:'时尚11',
                        flag:0,
                    },
                    {
                        id:'10012',
                        name:'时尚12',
                        flag:0,
                    },
                    {
                        id:'10013',
                        name:'时尚13',
                        flag:0,
                    },
                    {
                        id:'10014',
                        name:'时尚14',
                        flag:0,
                    },
                    {
                        id:'10015',
                        name:'时尚15',
                        flag:0,
                    },
                    {
                        id:'10016',
                        name:'时尚16',
                        flag:0,
                    },
                    {
                        id:'10017',
                        name:'时尚17',
                        flag:0,
                    },
                    {
                        id:'10018',
                        name:'时尚18',
                        flag:0,
                    },
                    {
                        id:'10019',
                        name:'时尚19',
                        flag:0,
                    },
                    {
                        id:'10020',
                        name:'时尚20',
                        flag:0,
                    },
                ],
            }
        },
        methods:{
            handleGoBack(){
                this.$router.go(-1);
            }
        },
    }
</script>

<style scoped lang="less">
.search{
    padding: 0 2%;
    width: 96%;
    .search-header{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .search-header-name{
            color:var(--backfriend-name);
        }
        .search-header-goback{
            position: absolute;
            width: 0.35rem;
            height: 0.35rem;
            border-bottom: 2px solid var(--backfriend-name);
            border-left: 2px solid var(--backfriend-name);
            transform: rotate(45deg);
            top: 30%;
            left: 0;
        }
    }
    .search-content{
        height: 94%;
        .search-flagpool{
            height: 6%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .search-flagpool-left{
                display: flex;
                justify-content: flex-end;
                width: 50%;
                .search-flagpool-leftt{

                }
                .search-flagpool-lefta{
                    margin: 0 5%;
                    width: 0.35rem;
                    height: 0.35rem;
                    border-bottom: 2px solid var(--backfriend-name);
                    border-right: 2px solid var(--backfriend-name);
                    transform: rotate(45deg);
                }
            }
        }
        .search-flagarea{
            width: 100%;
            overflow-x: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .search-flagarea-father{
                /*overflow-x: auto;*/
                width: 150%;
                margin-left: 50%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                .search-flagarea-child{
                    margin: 0.1rem;
                    flex-shrink: 0;
                    border: 1px solid #940619;
                    border-radius: 10px;
                    text-align: center;
                    padding: 0.15rem;
                }
            }
        }
        /*隐藏滚动条*/
        .search-flagarea::-webkit-scrollbar {
            display: none;
        }
        .search-myself-flag{
            height: 6%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .search-myselfarea{
            width: 100%;
            overflow-x: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            .search-myselfarea-father{
                width: 150%;
                margin-left: 50%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                .search-myselfarea-child{
                    margin: 0.1rem;
                    flex-shrink: 0;
                    border: 1px solid #940619;
                    border-radius: 10px;
                    text-align: center;
                    padding: 0.15rem;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .search-myselfarea-child-colse {
                        position: relative;
                        width: 0.4rem;
                        height: 0.4rem;
                        border-radius: 50%;
                        border: 1px solid red;
                        margin-left: 0.2rem;
                    }

                    .search-myselfarea-child-colse::before,
                    .search-myselfarea-child-colse::after {
                        position: absolute;
                        content: ' ';
                        background-color: red;
                        left: 0.2rem;
                        width: 1px;
                        height: 0.4rem;
                    }

                    .search-myselfarea-child-colse::before {
                        transform: rotate(45deg);
                    }

                    .search-myselfarea-child-colse::after {
                        transform: rotate(-45deg);
                    }
                }
            }
        }
        /*隐藏滚动条*/
        .search-myselfarea::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>