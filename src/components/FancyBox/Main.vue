<template>
    <transition name="fancy">
        <div v-show="visible" class="fancy-box-mask">
dadas
        </div>
    </transition>
</template>
<script>
export default {
    name: 'FancyBox',
    data() {
        return {
            visible: false
        }
    }
}
</script>
<style>
    .fancy-box-mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #333;
        z-index: 22;
    }
    .fancy-enter, .fancy-leave-active{
        opacity: 0;
    }
    .fancy-enter-active, .fancy-leave-active{
        transition: .2s;
    }
</style>


