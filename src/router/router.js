import Home from 'view/About.vue'

export const routes =[
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: Home
    }
    // ,
    // {
    //     path: '/about',
    //     name: 'about',
    //     meta: {
    //         title: '关于'
    //     },
    //     component: () => import('router/About.vue')
    // }
]
export default class router_dir {
}