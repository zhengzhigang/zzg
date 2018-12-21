<template>
    <div class="left-bar">
        <div class="title">
            <h2>JavaScript</h2>
        </div>
        <ol class="list">
            <li v-for="(item, i) in list" :key="i">
                <a :href="item.link">{{item.title}}</a>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    name: 'LeftBar',
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .left-bar {
        position: fixed;
        width: 280px;
        left: 0;
        top: 0;
        padding-left: 25px;
        bottom: 0;
        overflow-y: scroll;
        box-shadow: 0 0 40px #CCC;
        .title {
            padding-top: 20px;
            font-size: 24px;
            color: #000;
            font-weight: 600;
        }
        .list {
            padding-top: 30px;
            padding-left: 30px;
            list-style: decimal;
        }
    }
</style>


