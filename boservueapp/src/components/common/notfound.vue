<template>
    <div>404</div>
</template>

<script>
    export default {
        name: "notfound",
        data(){
            return {
                timer:null,
            }
        },
        methods:{
            goWeChat(){
                this.$router.push({
                    path:'/wechat',
                    query:{
                        type:'0',
                    }
                });
                console.log('dyk');
            }
        },
        created(){
            let that = this;
            clearTimeout(this.timer);
            sessionStorage.setItem('login','1')
            that.timer = setTimeout(()=>{
                that.goWeChat()
            },3000)
        },
        destroyed(){
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
</script>

<style scoped>

</style>