import Message from '@/components/Message/main'
import MessageBox from '@/components/MessageBox/main'
import FancyBox from '@/components/FancyBox/main'

const install = function(Vue, options = {}) {
    Vue.prototype.$message = Message
    Vue.prototype.$messageBox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$fancyBox = FancyBox
}

export default install