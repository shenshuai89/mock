var Mock = require('mockjs')
var Random = Mock.Random

let num = 10;
const produceData = function () {
  let articles = [],comments = []

  for (let i = 0; i < num; i++) {
    let newArticleObject = {
      title: Random.ctitle(5,10),
      content: Random.cparagraph(7, 10),
      time: Random.date() + ' ' + Random.time(),
    }
    articles.push(newArticleObject)
  }

  for (let i = 0; i < num; i++) {
    let newCommentObject = {
      name: Random.cname(),
      time: Random.date() + ' ' + Random.time(),
      location: Random.city(),
      content: Random.cparagraph(9, 15)
    }
    comments.push(newCommentObject)
  }

  return {
    articles: articles,
    comments: comments
  }
}



// 第三个参数可以是对象也可以是返回对象的函数
Mock.mock('/article', 'get', produceData)
Mock.mock('/comments', 'get', produceData)
