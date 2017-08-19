<template>
  <div class="comment">
    <ul class="row">
      <li v-for="item in comments">
        <div class="top">
          <h4 class="name">{{ item.name }}</h4>
          <div class="right">
            <span class="time">{{ item.time }}</span>
            <span class="location">{{ item.location }}</span>
          </div>
          <div class="clearfix"></div>
        </div>
        <p class="content">{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'comment',
    mounted(){
      this.getData()
    },

    methods: {
      ...mapActions({
        getData: 'getCommentsData'
      })
    },

    computed: {
      ...mapGetters({
        comments: 'getComments'
      })
    }
  }
</script>

<style scoped>
  .comment {
    margin-top: 40px;
  }

  .comment ul li {
    list-style: none;

  }

  .comment .top {
    padding: 5px 10px;
    background-color: #6f9bb1;
    color: #fff;
  }

  .comment .top .name {
    float: left;
  }

  .right {
    float: right;
  }

  .comment .top h4 {
    font-weight: bold;
  }

  .content {
    text-align: left;
    padding:10px;
    border: 1px solid #6f9bb1;
    margin-bottom: 25px;
  }
</style>
