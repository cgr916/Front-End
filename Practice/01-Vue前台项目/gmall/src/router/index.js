import VueRouter from "vue-router"

import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'

export default new VueRouter({
    routes:[
        {
            path: "/home",
            component: Home,
            // 元信息 用于判别Footer组件显示的标志
            meta: {
                show: true
            }
        },
        {
            path: "/search",
            component: Search,
            meta: {
                show: true
            }
        },
        {
            path: "/login",
            component: Login,
            meta: {
                show: true
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                show: true
            }
        },
    ]
})