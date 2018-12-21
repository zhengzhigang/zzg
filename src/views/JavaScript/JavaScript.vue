<template>
    <div class="js">
        <left-bar :list="list"></left-bar>
    </div>
</template>
<script>
import LeftBar from '@/components/LeftBar.vue'
export default {
    name: 'JavaScript',
    components: {
        LeftBar
    },
    data() {
        return {
            list: [
                {
                    title: '基础',
                    link: 'https://www.baidu.com'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .js {
        height: 1900px;
    }
</style>


