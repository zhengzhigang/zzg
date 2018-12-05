<template>
    <div class="home">
        <div class="info">
            <img src="../../assets/img/logo.png" alt="logo">
            <h1>dadadhaskjdh</h1>
        </div>
        <p class="msg-title">
            给我留言
        </p>
        <div class="message">
            <div class="message-title">
                <input class="zg-input" type="text" placeholder="留言主题...">
            </div>
            <div class="message-content">
                <textarea class="zg-textarea" cols="30" rows="6" placeholder="留言内容..."></textarea>
            </div>
            <div class="message-btn">
                <button class="zg-btn">发送</button>
            </div>
        </div>
        <div class="footer">
            Copyright © 2014-2018 Evan You
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .home {
        padding: 60px 30px 0 30px;
    }
    .info {
        margin-top: 50px;
        img {
            display: block;
            margin: auto;
        }
        h1 {
            margin: 30px 0;
            font-size: 48px;
            font-weight: 600;
            text-align: center;
        }
    }
    .msg-title {
        padding-bottom: 20px;
        border-bottom: 1px solid #eaecef;
        margin-bottom: 20px;
        font-size: 24px;
        text-align: center;
        color: #606266
    }
    .message {
        width: 560px;
        margin: auto;
        .message-title {
            margin-bottom: 20px;
        }
    }
    .message-btn {
        margin-top: 20px;
        text-align: right;
    }
    .footer {
        padding: 40px 30px;
        text-align: center;
        color: #999;
    }
</style>
