<template>
    <div class="login">
        <div class="login-box">
            <div class="login-item">
                <label>用户名</label>
                <input class="zg-input" type="text" v-model="userName" placeholder="输入用户名">
            </div>
            <div class="login-item">
                <label>密码</label>
                <input class="zg-input" type="text" v-model="password" placeholder="输入密码">
            </div>
            <div class="login-item login-btn">
                <button class="zg-btn block" @click="login">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
import * as api from '@/api'
export default {
    name: 'Login',

    data() {
        return {
            userName: '',
            password: ''
        }
    },

    methods: {
        login() {
            if (this.validate()) {
                api.login().then(res => {
                    console.log(res)
                })
            }
        },

        validate() {
            if (this.userName && this.password) {
                return true
            } else {
                let errorMsg = !this.userName ? '请输入用户名' : (!this.password ? '请输入密码' : '')
                this.$message({
                    message: errorMsg,
                    type: 'error'
                })
                return false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .login {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(81, 183, 255, 0.6);
    }
    .login-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 320px;
        padding: 20px;
        background-color: #fff;
        border: 2px solid #eaecef;
        .login-item {
            margin-bottom: 20px;
        }
        label {
            display: inline-block;
            margin-bottom: 10px;
        }
        .login-btn {
            width: 100px;
            margin: auto;
        }
        .fa-icon {
            font-size: 24px;
        }
    }
</style>


