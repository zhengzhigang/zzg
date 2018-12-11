import axios from 'axios'

axios.interceptors.response.use(res => {
    return res.data
}, error => {
    return Promise.reject(error);
})

export default axios
