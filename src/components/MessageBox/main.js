import Vue from 'vue'
import Main from './main.js'
import MsgBox from './Main.vue'
import {hasClass, addClass} from '@/utils/dom.js'
let MsgboxConstructor = Vue.extend(MsgBox)

let instance, modal
const MessageBox = function(options, callback1, callback2) {
  if (Vue.prototype.$isServr) return
  showNextMsg(options, callback1, callback2)
  return new Promise((resolve, reject) => {

  })
}

const initInstance = (options, callback1, callback2) => {
  options.closeds = function() {
    document.body.removeChild(modal)
    if (callback1) {
      callback1()
    }
    if (callback2) {
      callback2()
    }
  }
  instance = new MsgboxConstructor({
    el: document.createElement('div'),
    data: options
  })
}

const showNextMsg = (options, callback1, callback2) => {
  if (!instance) {
    initInstance(options, callback1, callback2)
  }
  modal = document.createElement('div')
  addClass(modal, 'zg-modal')
  document.body.appendChild(instance.$el)
  instance.visible = true;
  instance.closed = false
  document.body.appendChild(modal)
  return instance
}

MessageBox.alert = (options, callback1, callback2) => {
  MessageBox(options, callback1, callback2)
}

export default MessageBox
