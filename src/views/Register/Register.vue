<template>
    <div class="register">
        <div class="register-box">
            <h3>注册</h3>
            <div class="register-item">
                <label>用户名</label>
                <input class="zg-input" type="text" v-model="userName" placeholder="输入用户名">
            </div>
            <div class="register-item">
                <label>密码</label>
                <input class="zg-input" type="text" v-model="password" placeholder="输入密码">
            </div>
            <div class="register-item register-btn">
                <button class="zg-btn block" @click="register">立即注册</button>
            </div>
        </div>
    </div>
</template>
<script>
import * as api from '@/api'
export default {
    name: 'register',

    data() {
        return {
            userName: '',
            password: ''
        }
    },

    methods: {
        register() {
            let param = {
                userName: this.userName,
                password: this.password
            }
            if (this.validate()) {
                api.register(param).then(res => {
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
    .register {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(81, 183, 255, 0.6);
    }
    .register-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 400px;
        padding: 20px;
        background-color: #fff;
        border: 2px solid #eaecef;
        h3 {
            margin-bottom: 25px;
            font-size: 20px;
            text-align: center;
        }
        .register-item {
            margin-bottom: 20px;
        }
        label {
            display: inline-block;
            margin-bottom: 10px;
        }
        .register-btn {
            width: 100px;
            margin: auto;
        }
        .fa-icon {
            font-size: 24px;
        }
    }
</style>


