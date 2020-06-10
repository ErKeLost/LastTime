<template>

  <div class="tab-bar-item" @click="itemclick">
    <div  v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activecolor: {
        type: String,
        default: 'deeppink'
      }
    },
    data(){
      return {
        //isactive:true
      }
    },
    computed:{
      isactive(){
        // /home -> item1(/home = true)
        return this.$route.path.indexOf(this.path)!==-1
      },
      activestyle(){
        return this.isactive ? {color:this.activecolor} : {}
      }

    },
    methods:{
      itemclick(){

        this.$router.replace(this.path)
      }
    }

  }
</script>

<style socped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 60px;
    font-size: 13px;

  }
  /*.active{
      color:hotpink;
  }*/
  .tab-bar-item img{
    width: 44px;
    height: 35px;
    margin-top: 4px;
    vertical-align: middle;


  }
</style>
