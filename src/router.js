import VueRouter from 'vue-router'

//导入路由相关组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
           //路径不能带.
           {path:'/home',component:HomeContainer},
           {path:'/',redirect:'/home'},
           {path:'/member',component:MemberContainer},
           {path:'/shopcar',component:ShopcarContainer},
           {path:'/search',component:SearchContainer}, 

 ],
 linkActiveClass:'mui-active'//覆盖默认的路由高亮的类
})

// 把路由对象暴露出去
export default router