<template>
    <div class="login">
        <div class="login-top" v-show="showTop"></div>
        <!--@touchend="handleClick(0)"-->
        <div
                class="login-middle">
            <div class="middle-title">
                <span
                    :class="formData.activeIndex==0 ? 'active':''"
                    @touchend="login(0)">
                    Log In
                </span>
                <span class="title-2">or</span>
                <span
                    :class="formData.activeIndex==1 ? 'active':''"
                    @touchend="login(1)">
                    Sign Up
                </span>
            </div>
            <div class="log-password">
                <input
                        type="text"
                        placeholder="请输入手机号码"
                        @focus="phoneFocus(0)"
                        id="phone"
                        @blur="phoneBlur(0)"
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
                        :type="changePass"
                        placeholder="请输入密码"
                        @focus="phoneFocus(1)"
                        id="password"
                        @blur="phoneBlur(1)"
                        @input = 'phoneTest(formData.password)'
                        v-model="formData.password">
                <div
                        class="log-see"
                        @touchend="changePassTake(0)">
                </div>
            </div>
            <div class="log-password" v-show="formData.activeIndex == 1">
                <input
                        :type="changePass2"
                        placeholder="请再次输入密码"
                        id="password2"
                        @focus="phoneFocus(2)"
                        @blur="phoneBlur(2)"
                        @input = 'phoneTest(formData.aginPassword)'
                        v-model="formData.aginPassword">
                <div
                        class="log-see"
                        @touchend="changePassTake(1)">
                </div>
            </div>
            <div class="log-button">
                <div @touchend="sendLogin">{{loginName}}</div>
            </div>
        </div>
        <!--@touchend="handleClick(1)"-->
        <div
            class="login-bottom"
            v-show="!showTop">
            <div class="key-num" v-show="showKeyNum">
                <div
                    class="key-num-0"
                    v-for="(item,index) in keyNum"
                    :key="item">
                    <span :class="activeNum == index?'active':''">{{item}}</span>
                </div>
            </div>
            <div
                v-show="!showKeyNum"
                class="key-abc">
                <div
                    class="key-abc-a"
                    v-for="(item,index) in keyABC"
                    :key="item">
                    <span
                        :class="activeABC == index?'active':''"
                        @touchend="inputNum(index)">
                        {{item}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "notfound",
        data(){
            return {
                timer:null,
                showTop:true,
                loginName:"Log In",
                clearPhone:false,
                formData:{
                    activeIndex:0,
                    phone:'',
                    password:'',
                    aginPassword:'',
                },
                changePass:'password',
                changePass2:'password',
                keyNum:[1,2,3,4,5,6,7,8,9,0,'abc'],
                keyABC:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','123'],
                activeNum:0,
                activeABC:0,
                showKeyNum:false,
                onFocus:false,
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
                this.formData.activeIndex = i;
            },
            phoneTest(str){
                if (str.length>0){
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
            },
            changePassTake(i){
                if (i == 0){
                    this.changePass = this.changePass == 'password'? 'text':'password';
                } else if(i == 1){
                    this.changePass2 = this.changePass2 == 'password'? 'text':'password';
                }
            },
            phoneFocus(i){
                if (i==0){
                    this.showKeyNum = true
                } else {
                    this.showKeyNum = false;
                }
                this.showTop = false;
            },
            phoneBlur(i){
                console.log(i);
                if(this.onFocus){
                    return
                }
                // this.showTop = true;
            },
            handleClick(i){
                document.getElementById('phone').focus();
                if (i){
                    this.onFocus = true;
                }
                // else{
                //     this.onFocus = false;
                // }
            },
            inputNum(i){
                if (i == (this.keyABC.length - 1)){
                    this.showKeyNum = true;
                }
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
            input[type='password']{
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
    .login-bottom{
        width: 100%;
        height: calc(50% - 1px);
        border-top: 1px solid rgba(255,255,255,0.3);
        .key-num{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .key-num-0{
                width: 33%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    width: 70%;
                    height: 70%;
                    background-color: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                }
                .active{
                    background-color: rgba(0,0,0,0.3);
                }
            }
        }
        .key-abc{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .key-abc-a{
                width: 16%;
                height: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    width: 80%;
                    height: 80%;
                    background-color: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                }
                .active{
                    background-color: rgba(0,0,0,0.3);
                }
            }
        }
    }
}
</style>