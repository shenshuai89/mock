<template>
  <div id="app" class="container">
    <router-link tag="button" class="btn" to="/">新闻</router-link>
    <router-link tag="button" class="btn" to="/comment">评论</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top:20px;
  }

  .router-link-exact-active{
    color: #fff!important;
    background-color: #5bc0de;
    border-color: #46b8da;
  }
</style>
