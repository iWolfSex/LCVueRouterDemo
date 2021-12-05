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
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        }, {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isauth: true,title:'新闻'}
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isauth: true ,title:'消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'datail',
                            component: Datail,
                            meta: { isauth: true ,title:'详情'},
                            //props的第一种写法
                            // props: { a: 1, b: 2 }
                            //props的第二种写法，值为布尔值，就会把该路由组件收到的所有params参数，以props的形式转给Detail
                            //  props:true
                            //props的第三种写法，值为函数
                            // props({query:{id,title}}) {
                            //     return {id,title}
                            // }
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
//全局前置路由守卫-----每次路由切换之前被调用，初始化的时候被调用
router.beforeEach((to, from, next) => {
   
    if (to.meta.isauth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('学校名不对无权限查看')
        }
    } else {
        next()
    }
})

//全局后置路由守卫-----每次路由切换之后被调用，初始化的时候被调用
router.afterEach((to, from)=>{
    from
    document.title = to.meta.title || '路由系统'
})

export default router
