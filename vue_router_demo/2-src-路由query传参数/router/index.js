//该文件专门用于穿件整个应用的的 路由器
import VueRouter from "vue-router";

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import News from '../pages/News'
import Message from '../pages/Message'
import Datail from '../pages/Datail'
//c创建并且暴露路由
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        }, {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'datail',
                            component: Datail,
                        }
                    ]
                }
            ]
        }
    ]
})
