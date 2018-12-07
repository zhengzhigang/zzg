import storage from '@/utils/storage'
import { removeToken } from '../../utils/auth'

const account = {
    state: {
        user: {
            userId: '',
            userName: '',
            token: null
        },
        token: null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
            if (user && user.token) {
                state.token = user.token
            }
        },
        CLEAR_USER(state) {
            state.user = null
            state.token = null
        }
    },
    actions: {
        checkUser({commit}) {
            commit('SET_USER', storage.get('userInfo'))
        },
        login({commit}, user) {
            commit('SET_USER', user)
            storage.set('userInfo', user)
        },
        loginout({ commit }) {
            commit('CLEAR_USER')
            storage.remove('userInfo')
            removeToken() // 移除Cookies
        }
    }
}