import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const RESQUEST_ARTICLES = 'RESQUEST_ARTICLES'
const RESQUEST_COMMENTS = 'RESQUEST_COMMENTS'

Vue.use(Vuex)

const state = {
  articles: [],
  comments: []
}

const getters = {
  getArticles: state => state.articles,
  getComments: state => state.comments
}

const mutations = {
  [RESQUEST_ARTICLES](state){
    axios.get('/article').then(
      response => {
        let data = response.data
        state.articles = data.articles
      }
    ).catch(error => {
      console.log(error)
    })
  },
  [RESQUEST_COMMENTS](state){
    axios.get('/comments').then(
      response => {
        let data = response.data
        state.comments = data.comments
      }
    ).catch(error => {
      console.log(error)
    })
  }
}

const actions = {
  getArticlesData({commit}){
    commit(RESQUEST_ARTICLES)
  },
  getCommentsData(context){
    context.commit(RESQUEST_COMMENTS)
  }
}
export default new Vuex.Store({
  state, getters, mutations, actions
})
