<template>
    <div class="line" :style="{width:width}"></div>
</template>
<script>
export default {
    name: 'progressLine',
    data() {
        return {
            width: 0,
            winHeight: 0,
            bodyHeight: 0,
            scrollTop: 0
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.winHeight = window.innerHeight
            this.bodyHeight = document.body.clientHeight
            window.addEventListener('scroll', this.wScroll)
        },
        wScroll() {
            window.requestAnimationFrame(() => {
                this.width = (Math.max(0, Math.min(1, window.scrollY / (this.bodyHeight - this.winHeight)))) * 100 + '%'
            })
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll')
    }
}
</script>
<style lang="scss" scoped>
    .line {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background-color: #51b7ff;
    }
</style>


