<template>
    <div class="login">
        <div class="login-top" v-show="showTop"></div>
        <div class="login-middle">
            <div class="middle-title">
                <span
                    :class="activeIndex==0 ? 'active':''"
                    @touchend="login(0)">
                    Log In
                </span>
                <span class="title-2">or</span>
                <span
                    :class="activeIndex==1 ? 'active':''"
                    @touchend="login(1)">
                    Sign Up
                </span>
            </div>
            <div class="log-password">
                <input
                        type="text"
                        placeholder="请输入手机号码"
                        v-focus
                        @input = 'phoneTest(formData.phone)'
                        v-model="formData.phone">
                <div
                        class="log-phone"
                        v-show="clearPhone"
                        @touchend="phoneClear">

                </div>
            </div>
            <div class="log-password">
                <input
                        type="text"
                        placeholder="请输入密码"
                        @input = 'phoneTest(formData.password)'
                        v-model="formData.password">
                <div class="log-see"></div>
            </div>
            <div class="log-password" v-show="activeIndex == 1">
                <input
                        type="text"
                        placeholder="请再次输入密码"
                        @input = 'phoneTest(formData.aginPassword)'
                        v-model="formData.aginPassword">
                <div class="log-see"></div>
            </div>
            <div class="log-button">
                <div @touchend="sendLogin">{{loginName}}</div>
            </div>
        </div>
        <div class="login-bottom" v-show="showKeyboard"></div>
    </div>
</template>

<script>
    export default {
        name: "notfound",
        data(){
            return {
                timer:null,
                showTop:true,
                showKeyboard:false,
                loginName:"Log In",
                activeIndex:0,
                clearPhone:false,
                formData:{
                    phone:'',
                    password:'',
                    aginPassword:'',
                }
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
            },
            login(i){
                this.loginName = i == 0 ? 'Log In': 'Sign Up';
                this.activeIndex = i;
            },
            phoneTest(str){
                console.log(str);
                if (this.formData.phone.length>0){
                    this.clearPhone = true;
                }else{
                    this.clearPhone = false;
                }
            },
            sendLogin(){
                console.log(this.formData)
            },
            phoneClear(){
                this.formData.phone = '';
            }
        },
        created(){
            // let that = this;
            // clearTimeout(this.timer);
            // sessionStorage.setItem('login','1')
            // that.timer = setTimeout(()=>{
            //     that.goWeChat()
            // },3000)
        },
        destroyed(){
            // clearTimeout(this.timer);
            // this.timer = null;
        }
    }
</script>

<style scoped lang="less">
.login{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    font-size: 0.6rem;
    color:#fff;
    font-weight: bolder;
    div{
        width: 100%;
        height: 50%;
    }
    .login-top{
        border-bottom: 1px solid rgba(255,255,255,0.3);
        height: calc(50% - 1px);
    }
    .login-middle{
        div{
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 4% 0;
            input{
                width: 75%;
                height: 75%;
                background-color: rgba(0,0,0,0.3);
                border: rgba(0,0,0,0.3);
                padding: 2%;
                color:#fff;
                font-size: 0.4rem;
            }
            input::-webkit-input-placeholder {
                 /* placeholder颜色  */
                color: #aab2bd;
                /* placeholder字体大小  */
                font-size: 12px;
                 /* placeholder位置  */
                text-align: left;
            }
        }
        .log-button{
            background-color: #00c800;
            width: 80%;
            margin: 0 10%;
        }
        .middle-title{
            margin: 0;
            span{
                margin: 0 2%;
            }
            .active{
                color:#00c800;
            }
            .title-2{
                color: rgba(255,255,255,0.3);
            }
        }
        .log-password{
            position: relative;
            div{
                position: absolute;
                top: 0;
                right: 12%;
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background-color: rgba(0,0,0,0.8);
            }
            .log-see{
                background-color: rgba(0,0,0,0.6);
            }
        }
    }
}
</style>