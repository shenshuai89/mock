<template>
  <div class="news">
    <ul>
      <li v-for="article in articles">
        <h3 class="title">{{ article.title }}</h3>
        <p>{{ article.time }}</p>
        <p class="content">{{ article.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'news',
    mounted() {
      this.getData()
    },

    methods: {
      ...mapActions({
        getData: 'getArticlesData'
      })
    },

    computed: {
      ...mapGetters({
        articles: 'getArticles'
      })
    }
  }
</script>

<style scoped>
  .news{
    margin-top:40px;
  }
  h3{
    margin-top: 0px;
  }
  .news ul li{
    list-style: none;
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid #8c8c8c;
    border-bottom: 2px solid #8c8c8c;
  }
  .content{
    text-align: left;
  }
</style>
