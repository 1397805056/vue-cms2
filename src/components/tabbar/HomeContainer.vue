<template>
	<div>
		  <mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
		  <img :src="item.img">
		  </mt-swipe-item>
		  </mt-swipe>
		
		   <!-- 九宫格 到 6宫格 的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      	<router-link to="/home/newlist">
              <img src="../../img/menu1.png" alt="">
        </router-link>      
              <div class="mui-media-body">新闻资讯</div></li>
              
              
              
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      		<router-link to="/home/photolist">
              <img src="../../img/menu2.png" alt="">
            </router-link> 
              <div class="mui-media-body">图片分享</div></li>
              
              
              
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/goodslist">
              <img src="../../img/menu3.png" alt=""></router-link> 
              <div class="mui-media-body">商品购买</div></li>
              
              
              
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../img/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../img/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../img/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
  </ul> 
	</div>
</template>
<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'

export default{
	data(){
		return {
			lunbotuList:[]
		};
	},
	created(){
		this.getLunbotu();
	},
	components:{
		swiper
	},
	methods:{
		getLunbotu(){
		//获取轮播图数据 vue-resource中 api前不带/
			this.$http.get('api/getlunbo').then(result=>{
  					if(result.body.status=== 0){
  						this.lunbotuList=result.body.message;
  					}else{
  					Toast("轮播图去吃饭了...");
  					}
  					
  				})
		}	
	}

}
</script>
<style lang="scss" scoped>
.mint-swipe{
height:200px
}
.mint-swipe-item{

	img{
	width:100%;
	height:100%;
	}
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>