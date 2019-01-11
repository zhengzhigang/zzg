<template>
    <div class="home">
        <div class="info">
            <img src="../../assets/img/logo.png" alt="logo">
            <h1>dadadhaskjdh</h1>
            <button class="zg-btn" @click="updateSwiper">设置</button>
        </div>
        <p class="msg-title">
            给我留言
        </p>
        <div class="message">
            <div class="message-title">
                <input class="zg-input" type="text" placeholder="留言主题..." v-model="theme">
            </div>
            <div class="message-content">
                <textarea class="zg-textarea" cols="30" rows="6" placeholder="留言内容..." v-model="content"></textarea>
            </div>
            <div class="message-btn">
                <button class="zg-btn" @click="sendMessage">发送</button>
            </div>
        </div>
        <div class="footer">
            Copyright © 2014-2018 Evan You
        </div>
        <div class="mask">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, i) in list" :key="i">
                    <img :src="item.src" alt="">
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
import * as api from '@/api'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'home',
    components: {
        swiper,
        swiperSlide
    },

    data () {
        return {
            theme: '',
            content: '',
            list: [
                {src: require('../../assets/img/timg.jpeg')},
                {src: require('../../assets/img/timg1.jpeg')},
                {src: require('../../assets/img/timg2.jpeg')},
                {src: require('../../assets/img/timg4.jpeg')},
                {src: require('../../assets/img/timg5.jpeg')}
            ],
            swiperOption: {
                effect: 'fade',
                lazy: true,
                autoHeight: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },

    methods: {
        updateSwiper() {
            this.list = ['1', '2', '3', '4']
        },
        sendMessage () {
            api.sendMessage({theme: this.theme, content: this.theme}).then(res => {
                if (res.status === 0) {
                    this.$message({
                        type: 'success',
                        message: '留言成功'
                    })
                    this.theme = ''
                    this.content = ''
                } else {
                    this.$message({
                        type: 'error',
                        message: res.msg
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .7);
        z-index: 999;
    }
    .swiper-container {
        position: absolute;
        width: 600px;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
    .swiper-slide {
        max-width: 600px;
        border: 1px solid #ddd;
        background-color: #ddd;
        max-height: 600px;
        text-align: center;
        img {
            display: inline-block;
        }
    }
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
        margin: 20px 0;
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
        margin-top: 20px;
        text-align: center;
        color: #999;
        border-top: 1px solid #eaecef;
    }
</style>
