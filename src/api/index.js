import fetch from './fetch'

const sendMessage = data => {
    return fetch({
        url: '/api/send/message',
        method: 'post',
        data
    })
}

export {
    sendMessage
}