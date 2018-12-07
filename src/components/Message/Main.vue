<template>
    <transition name="zg-message-fade">
        <div 
            :class="[
                'zg-message',
                type ? `zg-message-${type}` : '',
                center ? 'is-center' : ''
            ]"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimer">
            <v-icon :class="['zg-message-icon', type ? `zg-icon-${type}` : '']" name="info-circle"></v-icon>
            <slot>
                <p class="zg-message-content">{{message}}</p>
            </slot>
        </div>
    </transition>
</template>
<script>
const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
}
export default {
    data() {
        return {
            visible: false,
            message: '',
            duraction: 3000,
            type: 'info',
            timer: null,
            closed: false,
            center: false
        }
    },

    computed: {

    },

    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false
                this.$el.addEventListener('transitionend', this.destroyElement);
            }
        }
    },

    methods: {
        destroyElement() {
            this.$el.removeEventListener('transitionend', this.destroyElement);
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },

        close() {
            this.closed = true
            if (typeof this.onClose === 'function') {
                this.onClose(this)
            }
        },

        clearTimer() {
            clearTimeout(this.timer)
        },

        startTimer() {
            if (this.duraction > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close()
                    }
                }, this.duraction)
            }
        },

        keydown(e) {
            if (e.keyCode === 27) {
                if (!this.closed) {
                    this.close()
                }
            }
        }
    },

    mounted() {
        this.startTimer()
        document.addEventListener('keydown', this.keydown)
    },

    beforeDestory() {
        document.removeEventListener('keydown', this.keydown)
    }
}
</script>

