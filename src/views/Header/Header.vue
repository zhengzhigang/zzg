<template>
    <header class="nav">
        <router-link class="logo clearfix" to="/">
            <img class="float-left" src="../../assets/img/logo.png" alt="logo">
            <span class="float-left">dasdsadas</span>
        </router-link>
        <ul class="nav-list clearfix">
            <li class="nav-item">
                <router-link class="nav-link" to="/">首页</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/js">JavaScript</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/soon">NodeJS</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/soon">工具</router-link>
            </li>
            <li class="nav-item">
                <a href="javascript:;" class="nav-link" @click="logout">退出</a>
            </li>
        </ul>
    </header>
</template>
<script>
export default {
    name: 'Header',

    methods: {
        confirm() {

        },
        cancel() {
            alert(3)
        },
        logout() {
            this.$alert({
                title: '提示',
                text: '这是一段自定义内容'
            }, this.confirm, this.cancel)
        }
    }
}
</script>
<style lang="scss" scoped>
    .nav {
        position: fixed;
        height: 60px;
        left: 0;
        right: 0;
        top: 0;
        padding: 0 20px;
        z-index: 10;
        background: #fff;
        border-bottom: 1px solid #eaecef;
        .logo {
            display: inline-block;
            padding-top: 12px;
            img {
                display: block;
                margin-right: 10px;
                width: 36px;
                height: 36px;
            }
            span {
                font-size: 20px;
                line-height: 36px;
                font-weight: 600;
            }
        }
        .nav-list {
            float: right;
            line-height: 60px;
        }
        .nav-item {
            float: left;
            .nav-link {
                display: block;
                padding: 0 20px;
                height: 60px;
                &.router-link-exact-active {
                    position: relative;
                    color: #51b7ff;
                    border-bottom: 2px solid #51b7ff;
                }
            }
        }
    }
</style>


