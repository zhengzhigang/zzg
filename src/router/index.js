import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home'
import Base from '@/views/Base/Base'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        component: Base,
        children: [
            {
                path: '/home',
                component: Home,
                alias: '/'
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router