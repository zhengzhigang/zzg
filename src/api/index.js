import fetch from './fetch'

const sendMessage = data => {
    return fetch({
        url: '/send/message',
        method: 'post',
        data
    })
}

export {
    sendMessage
}