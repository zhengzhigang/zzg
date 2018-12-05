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
                <router-link class="nav-link" to="/a">JavaScript</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/b">NodeJS</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/c">工具</router-link>
            </li>
        </ul>
    </header>
</template>
<script>
export default {
    name: 'Header'
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
                &.router-link-active {
                    position: relative;
                    color: #51b7ff;
                    border-bottom: 2px solid #51b7ff;
                }
            }
        }
    }
</style>


