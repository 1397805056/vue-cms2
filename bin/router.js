import VueRouter from 'vue-router'

//导入路由相关组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewList from './components/news/NewsList.vue'
import NewInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
import GoodList from './components/goods/GoodsList.vue'
import GoodInfo from './components/goods/GoodInfo.vue'
import GoodDesc from './components/goods/GoodDesc.vue'
import GoodComment from './components/goods/GoodComment.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
           //路径不能带.
           {path:'/home',component:HomeContainer},
           {path:'/',redirect:'/home'},
           {path:'/member',component:MemberContainer},
           {path:'/shopcar',component:ShopcarContainer},
           {path:'/search',component:SearchContainer}, 
           {path:'/home/newlist',component:NewList}, 
           {path:'/home/newsinfo/:id',component:NewInfo}, 
           {path:'/home/photolist',component:PhotoList}, 
           {path:'/home/photoinfo/:id',component:PhotoInfo}, 
           {path:'/home/goodslist',component:GoodList}, 
           {path:'/home/goodinfo/:id',component:GoodInfo}, 
           {path:'/home/gooddesc/:id',component:GoodDesc,name:"goodsdesc"}, 
           {path:'/home/goodcomment/:id',component:GoodComment,name:"goodscomment"}, 
     
           

 ],
 linkActiveClass:'mui-active'//覆盖默认的路由高亮的类
})

// 把路由对象暴露出去
export default router