<template>
    <div
        @touchend="handleClick"
        :disabled="disabled"
        :loading="loading"
        :class="[type2, btn,size2]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "btn",
        props:['type','size','disabled','loading'],
        data(){
            return {
                btn:'btn',
                type2:this.type,
                size2:this.size,
            }
        },
        created(){

        },
        methods:{
            handleClick(){
                console.log(this.disabled)
                if(this.disabled !== ''){
                    this.$emit('touchend')
                }
            }
        }
    }
</script>

<style scoped lang="less">
.btn{
    display: inline-block;
    padding: 0.2rem 0.4rem;
    border: 1px solid #eee;
    margin: 0.1rem;
    border-radius: 0.1rem;
}
.btn:active{
    color:var(--backfriend-name);
    background-color: var(--main-bg-color);
}
.btn.info{
    background-color: #57c5f7;
    color:#fff;
}
.btn.info:active{
    background-color: #fff;
    color:#57c5f7;
}
.btn.success{
    background-color: #19be6b;
    color:#fff;
}
.btn.success:active{
    background-color: #fff;
    color:#19be6b;
}
.btn.warning{
    background-color: #ffad33;
    color:#fff;
}
.btn.warning:active{
    background-color: #fff;
    color:#ffad33;
}
.btn.error{
    background-color: #fe6643;
    color:#fff;
}
.btn.error:active{
    background-color: #fff;
    color:#fe6643;
}
.btn.text{
    border: 0;
    color:#eee;
}
.btn.text:active{
    border: 0;
    color:#19be6b;
}
.btn[disabled='disabled']{
    background-color: #eee;
    color:#666;
}
.btn[disabled='disabled']:active{
    background-color: #fff;
    color:#eee;
}
.btn[loading]{
    background-color: #eee;
    color:#666;
}
.btn[loading]:active{
    background-color: #fff;
    color:#eee;
}
.btn.bigger{
    display: block;
    width: 80%;
    text-align: center;
    margin: 0 6%;
}
</style>