import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Comment from '@/components/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'News',
      component: News
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    }
  ]
})
