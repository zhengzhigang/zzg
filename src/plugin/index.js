import Message from '@/components/Message/main'

const install = function(Vue, options = {}) {
    Vue.prototype.$message = Message
}

export default install