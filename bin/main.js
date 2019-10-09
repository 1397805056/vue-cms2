import Vue from 'vue';
// 1. 导入 vue-router 包
import VueRouter from 'vue-router';
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)


Vue.config.devtools = true

//安装图片预览插件

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/golbal.css'


// 导入所有的 MIntUI 组件
// 导入 Mint-UI
/* import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui' //把头部的组件都导入进来
 import 'mint-ui/lib/style.css'


 Vue.use(Lazyload);
 Vue.component(Header.name, Header);
 Vue.component(Swipe.name, Swipe);
 Vue.component(SwipeItem.name, SwipeItem);
 Vue.component(Button.name, Button);*/
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
 
 //导入vue-resource发送数据请求
 import VueResource from 'vue-resource'
 Vue.use(VueResource)
 
 Vue.http.options.root='http://www.liulongbin.top:3005';
 Vue.http.options.emulateJSON=true;
// 导入 app 组件
import app from './App.vue'

// 导入 自定义路由模块
import router from './router.js'

//定义全局过滤器
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
 return moment(dataStr).format(pattern)
 //处理时间
})
var vm = new Vue({
  el: '#app',
  data:{
	  msg:'测试一成功'
  },
  render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  router // 4. 将路由对象挂载到 vm 上
})

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；