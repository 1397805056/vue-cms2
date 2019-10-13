import Vue from 'vue';
// 1. 导入 vue-router 包
import VueRouter from 'vue-router';
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)


Vue.config.devtools = true

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)


var car = JSON.parse(localStorage.getItem('car') || '[]')


var store = new Vuex.Store({
  state: { // this.$store.state.***
    car: car ,// 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象， 咱们可以暂时将这个商品对象，设计成这个样子   
   count:0
    // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
  },
  mutations: { // this.$store.commit('方法的名称', '按需传递唯一的参数')
    addToCar(state, goodsinfo) {
      // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

      // 假设 在购物车中，没有找到对应的商品
      var flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
	},
	 updateGoodsInfo(state, goodsinfo) {
	      // 修改购物车中商品的数量值
	      // 分析： 
	      state.car.some(item => {
	        if (item.id == goodsinfo.id) {
	          item.count = parseInt(goodsinfo.count)
	          return true
	        }
	      })
	      // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
	      localStorage.setItem('car', JSON.stringify(state.car))
	    },
	    removeFromCar(state,id){
	    	state.car.some((item,i)=>{
	    		if(item.id == id){
	    			state.car.splice(i,1)
	    			return true;
	    		}
	    	})
	    	 localStorage.setItem('car', JSON.stringify(state.car))
	    },
	    updateGoodsSelected(state,info){
	    	state.car.some(item=>{
	    		if(item.id == info.id){
	    			item.selected=info.selected
	    			return true;
	    		}
	    	})
	     localStorage.setItem('car', JSON.stringify(state.car))
	    },
	    
  },//this.$store.commit('方法名称'，''参数)
 getters:{
		getAllCount(state){
		var c = 0;
		state.car.forEach(item=>{
			c+= item.count
		})
		return c;
		},
		getGoodsCount(state){
			var o={}
			state.car.forEach(item=>{
				o[item.id] =item.count
			})
			return o;
		},
		getGoodsSelected(state){
			var o={}
			state.car.forEach(item=>{
				o[item.id] =item.selected
			})
			return o;
		},
		getGoodsCountAndAmount(state){
				var o={
						count:0,
						amount:0,
				}
				state.car.forEach(item=>{
					if(item.selected){
						o.count += item.count
						o.amount +=item.price *item.count
					}
				})
				return o;
		},
	}//this.$store.getters.***
})
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
  router, // 4. 将路由对象挂载到 vm 上
  store//将store对象挂在到vm
})

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；