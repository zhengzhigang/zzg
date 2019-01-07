<template>
    <transition name="zg-msgbox-fade">
        <div 
            class="zg-msgbox-wrapper"
            v-show="visible">
            <div class="zg-message-box">
                <div class="zg-msgbox-header">
                    <div class="zg-msgbox-title">
                        <span>{{title}}</span>
                    </div>
                    <button class="zg-msgbox-headerbtn">
                        <i class="zg-msgbox-close" @click="close">x</i>
                    </button>
                </div>
                <div class="zg-msgbox-content">
                    <p>{{text}}</p>
                </div>
                <div class="zg-msgbox-btns">
                    <button class="zg-btn zg-btn-small" @click="close">取消</button>
                    <button class="zg-btn zg-btn-primary zg-btn-small">确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'MessageBox',
    data() {
        return {
            visible: true,
            closed: false
        }
    },
    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false
                this.$el.parentNode.removeChild(this.$el);
                setTimeout(() => {
                    this.closeds()
                })
            }
        }
    },
    methods: {
        close() {
            this.closed = true
        }
    }
}
</script>


