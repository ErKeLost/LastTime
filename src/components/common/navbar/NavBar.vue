<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center">标题</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
	export default {
		name: "NavBar"
	}
</script>

<style scoped>
  .nav-bar {


    display: flex;

    height: 44px;
    line-height: 44px;
    text-align: center;

    /*border-bottom: 1px solid #eee;*/
    /*box-shadow: 0 1px 1px rgba(100,100,100,.08);*/
  }

  .left {
    width: 60px;
  }

  .center {
    flex: 1;
  }

  .right {
    width: 60px;
  }
</style>
