<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">雅诗兰黛</div> </nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <recommend-view :recommends="recommend"></recommend-view>
      </div>
</template>
<script>
  import  NavBar from 'components/common/navbar/NavBar'
  import  HomeSwiper from './childcomps/HomeSwiper'
  import  {getHomeMultidata} from "network/home"
  import  RecommendView from  './childcomps/RecommendView'


  export default {
		name: "Home",
    components:{
      RecommendView,
		  NavBar,
      HomeSwiper,

    },
    data(){
		  return{
		    banners:[],
        recommend:[]
      }
    },
    created() {
		  //1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>
<style scoped>
 .home-nav{
   background: lightpink;
   /*var(--lint)*/
   color: white;

 }
</style>
