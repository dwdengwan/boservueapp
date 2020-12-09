<template>
    <div class="loading2 all">
        <div class="header loading2-header">
            <go-back-header></go-back-header>
        </div>
        <div class="content loading2-content">
            <div class="outer">
                <div class="inner"></div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';
    export default {
        name: "loading2",
        components:{
            goBackHeader
        },
    }
</script>

<style scoped lang="less">
    .loading2{
        .loading2-content{
            background-color: #2a3137;
            height: 94%;
            display: flex;
            justify-content: center;
            align-items: center;
            .outer {
                position: relative;
                height: 8rem;
                width: 8rem;
                background: linear-gradient(#14ffe0,#ffeb3b,#ff00e0);
                border-radius: 50%;
                animation: rotate 1.5s linear infinite;
                .inner {
                    position: absolute;
                    height: 7.2rem;
                    width: 7.2rem;
                    background: black;
                    top: 0.4rem;
                    left: 0.4rem;
                    border-radius: 50%;
                    z-index: 9;
                }
                span {
                    position: absolute;
                    height: 8rem;
                    width: 8rem;
                    background: linear-gradient(#14ffe0,#ffeb3b,#ff00e0);
                    border-radius: 50%;
                }
                span:nth-child(1) {
                    filter: blur(0.2rem);
                }
                span:nth-child(2) {
                    filter: blur(0.4rem);
                }
                span:nth-child(3) {
                    filter: blur(1.8rem);
                }
                span:nth-child(4) {
                    filter: blur(6rem);
                }
                @keyframes rotate {
                    0%{
                        filter: hue-rotate(0deg);
                    }
                    100%{
                        filter: hue-rotate(360deg);
                    }
                }
            }
        }
    }
</style>