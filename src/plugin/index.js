import Message from '@/components/Message/main'
import MessageBox from '@/components/MessageBox/main'

const install = function(Vue, options = {}) {
    Vue.prototype.$message = Message
    Vue.prototype.$messageBox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
}

export default install