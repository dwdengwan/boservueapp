<template>
    <div class="all scan" id="app">
        <div class="header">
            <go-back-header></go-back-header>
        </div>
        <custom-element></custom-element>
    </div>
</template>

<script>
    import goBackHeader from '@/components/common/goBackHeader.vue';

    import Vue from 'vue';
    Vue.component('custom-element', {
        render: function (createElement) {
            // var self = this

            // 第一个参数是一个简单的HTML标签字符 “必选”
            // 第二个参数是一个包含模板相关属性的数据对象 “可选”
            return createElement('div', {
                'class': {
                    foo: true,
                    bar: false
                },
                style: {
                    color: 'red',
                    fontSize: '14px'
                },
                attrs: {
                    id: 'boo'
                },
                domProps: {
                    innerHTML: 'Hello Vue!'
                },
                on: {
                    click: this.handleClick
                }
            },)
        },
        data () {
            return {
                show: true
            }
        },
        methods: {
            handleClick: function () {
                console.log('Clicked!')
            }
        }
    })

    export default {
        name: "friend",
        components:{
            goBackHeader
        },
    }
</script>

<style scoped lang="less">
.scan{
    width: 100%;
    background: #eee;
}
</style>