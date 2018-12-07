import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home'
import Base from '@/views/Base/Base'
import ComingSoon from '@/views/ComingSoon/ComingSoon'
import Login from '@/views/Login/Login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        component: Base,
        meta: {
            requirePath: true
        },
        children: [
            {
                path: '/home',
                component: Home,
                alias: '/',
                meta: {
                    requirePath: true
                }
            },
            {
                path: '/soon',
                component: ComingSoon
            }
        ]
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router