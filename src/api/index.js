import fetch from './fetch'

// 留言
const sendMessage = data => {
    return fetch({
        url: '/api/send/message',
        method: 'post',
        data
    })
}

// 登录
const login = data => {
    return fetch({
        url: '/api/login',
        method: 'post',
        data
    })
}

export {
    sendMessage,
    login
}