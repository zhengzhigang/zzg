import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home'
import Base from '@/views/Base/Base'
import ComingSoon from '@/views/ComingSoon/ComingSoon'
import Login from '@/views/Login/Login'
import JavaScript from '@/views/JavaScript/JavaScript'
import Register from '@/views/Register/Register'

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
    },
    {
        path: '/js',
        component: JavaScript,
        meta: {
            requirePath: true
        }
    },
    {
        path: '/register',
        component: Register
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router