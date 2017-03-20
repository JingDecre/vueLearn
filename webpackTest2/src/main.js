import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);//安装路由
Vue.use(VueResource);
// 1.定义（路由）组件
// 可以从其他文件import进来
const FirstSon = { template: '<div><h2>First son page</h2></div>'}
const SecondSon = { template: '<div><h2>Second son page</h2></div>' }
import ThirdSon from './component/third.vue'
// 动态路由匹配 dynamic route
// 可以在一个路由中设置多段【路径参数】，对应的值都会被设置到$route.params中
// 例如：模式:/user/:username/post/:post_id
// ,匹配路径: /user/decre/post/123  
 // $route.params:{ username: 'decre',post_id:123 }
const User = { 
    template:'<div class="user"><h2>User {{ $route.params.id }}</h2><router-view></router-view></div>'  
}

const FirstChild = { template: '<div><h2>FirstChild page</h2></div>' }
const SecondChild = { template: '<div><h2>SecondChild page</h2></div>' }

// 2.定义路由
// 每个路由应该映射一个组件。其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
    { path: '/first', component: FirstSon},
    { path: '/second', component: SecondSon},
    { path: '/third', component: ThirdSon},
    { path: '/user/:id', component:User, 
      children:[
        {
            path: '',
            component: FirstChild
        }
      ]  
    }
]

// 3.创建router实例，然后传 'routes' 配置
// 可以传别的配置参数
const router = new VueRouter({
    routes
})

// 4.创建和挂载根实例。
// 记得要通过router配置参数注入路由
// 从而让整个应用都有路由功能
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
/*new Vue({
  el: '#app',
  render: h => h(App)
})*/
