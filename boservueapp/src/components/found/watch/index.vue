<template>
    <div class="all watch">
        <div class="header found-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content barrages-drop watch-content" ref="content">
            <vue-baberrage
                :isShow="barrageIsShow"
                :barrageList="barrageList"
                :maxWordCount="maxWordCount"
                :throttleGap="throttleGap"
                :loop="barrageLoop"
                :boxHeight="boxHeight"
                :messageHeight="messageHeight">
            </vue-baberrage>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    import { vueBaberrage,MESSAGE_TYPE} from 'vue-baberrage';

    export default {
        name: "watch",
        components:{
            goBackHeader,vueBaberrage
        },
        data() {
            return {
                msg: 'dw你最帅~，最帅，最帅。。。',
                barrageIsShow: true,
                messageHeight: 3,
                boxHeight: 0,
                barrageLoop: true,
                maxWordCount: 3,
                throttleGap: 5000,
                barrageList: []
            };
        },
        mounted() {
            this.boxHeight = this.$refs.content.clientHeight;
            this.addToList();
        },
        methods: {
            addToList() {
                let list = [
                    {
                        id: 1,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 3,
                        barrageStyle: 'red'
                    },
                    {
                        id: 2,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 8,
                        barrageStyle: 'green'
                    },
                    {
                        id: 3,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 10,
                        barrageStyle: 'normal'
                    },
                    {
                        id: 4,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 5,
                        barrageStyle: 'blue'
                    },
                    {
                        id: 5,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 6,
                        barrageStyle: 'red'
                    },
                    {
                        id: 6,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 12,
                        barrageStyle: 'normal'
                    },
                    {
                        id: 7,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 20,
                        barrageStyle: 'red'
                    },
                    {
                        id: 8,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 1,
                        barrageStyle: 'normal'
                    },
                    {
                        id: 9,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 8,
                        barrageStyle: 'red'
                    },
                    {
                        id: 10,
                        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3064584167,3502823640&fm=26&gp=0.jpg',
                        msg: this.msg,
                        time: 10,
                        barrageStyle: 'yellow'
                    }
                ];
                list.forEach((v) => {
                    this.barrageList.push({
                        id: v.id,
                        avatar: v.avatar,
                        msg: v.msg,
                        time: v.time,
                        type: MESSAGE_TYPE.NORMAL,
                        barrageStyle: v.barrageStyle
                    });
                });
            }
        }
    };
</script>

<style  lang="less" scoped>
    .watch{
        width: 100%;
        .watch-content{
            height: 94%;
            position: relative;
        }
        .barrages-drop {
            .baberrage-stage {
                position: absolute;
                width: 100% !important;
                height: 100% !important;
                overflow: hidden;
                top: 0;
            }
        }
    }
</style>

