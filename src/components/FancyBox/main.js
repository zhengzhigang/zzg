import Vue from 'vue'
import Main from './Main.vue'

const FancyBoxConstructor = Vue.extend(Main)

let instance
const FancyBox = function(options) {
    instance = new FancyBoxConstructor({
        el: document.createElement('div'),
        data: options
    })
    document.body.appendChild(instance.$el)
}

export default FancyBox