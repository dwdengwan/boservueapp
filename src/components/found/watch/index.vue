<template>
    <div class="all watch">
        <div class="header found-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content watch-content" ref="content">
            <div class="watch-child" :style="{'background':$common.randomColor()}">
                <span class="watch-child-author" :style="{'background':$common.randomColor()}"></span>
                <span class="watch-child-text" :style="{'color':$common.randomColor()}">离别是为了下一次更好的重逢。</span>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';

    export default {
        name: "watch",
        components:{
            goBackHeader
        },
        data() {
            return {

            };
        },
        mounted() {

        },
        methods: {

        }
    };
</script>

<style  lang="less" scoped>
    .watch{
        width: 100%;
        .watch-content{
            height: 94%;
            position: relative;
            .watch-child{
                position: absolute;
                top: 0;
                right: 90%;
                display: inline-block;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 2%;
                border-radius: 10px;
                .watch-child-author{
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 50%;
                    display: inline-block;
                }
                .watch-child-text{
                    margin-left: 10px;
                }
            }
        }
    }
</style>

