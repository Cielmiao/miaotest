var postsData = require("../../data/posts-data.js")

Page({
  data: {
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    circular:true,
  },
  onposttap:function(event){
    var postId=event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '/pages/posts/post-detail/post-detail',
    })
  },
  onLoad: function (query){
    this.setData({
      posts_key: postsData.postList
    })
  }
  })
  