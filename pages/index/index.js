//index.js
//获取应用实例
const app = getApp();
// 引入公用文件。require 暂时不支持绝对路径
var sayHi = require('../../common/common')
/*
	这里修改data的值，不能直接修改，要像react一样去修改
	this.setData({
		key1:value1,
		...
	})
	其实是:
	Page.prototype.setData({

	});
	不能将值设成undefined，不仅不生效还可能会有副作用。
*/ 

Page({
	data: {
		errorInfo: true,
		phone:'',
		isShow: false,
		array:[
			'mohan',
			'manting',
			'qianjie',
			'ahuang'
		]
	},
	onLoad: function(){
		console.log("index加载完毕！");
		// 获取当前页面的路径，string
		console.log(this.route);
		wx.request({
			url:'http://m.maodou.com/www/fyc/api/list?sort=sort0&keyword=all&page=2',
			header: {
				'content-type':'application/json'
			},
			success: function(res){
				console.log(res.data.data.data.data);
			}
		})
	},
	onShow: function(){
		console.log("index已启动！");
		// 外部函数直接调用
		sayHi();
	},
	onHide: function(){
		console.log("index进入后台");
	},
	onPullDownRefresh: function() {
		console.log("没有数据，就不要刷新了。");	
	},
	onReachBottom: function() {
		console.log("划到底了，别看了。");
	},
	onShareAppMessage: function () {
		console.log("写的不好，别转发了");
	},
	onPageScroll: function(){
		console.log("慢点划，仔细看好嘛！");
	},
	onTabItemTap: function(item){
		console.log(item.index + "你点了tab，要去哪儿呢？");
	},
	handlerLogin: function(){
		// wx.navigateTo({
		// 	url: '/pages/test/test?test=23',
		// });
		// 获取全局数据
		var app = getApp();
		console.log(app.globalData);
	},
	handlerInput: function(e){
		var num = e.detail.value;
		// 获得事件源的值
		console.log(e);
		console.log(e.detail);
		if(num.length == 11){
			if((/^1[3-9]\d{9}$/.test(num))){
				this.setData({
					errorInfo: false,
					phone: num
				})
			}else{
				this.setData({
					errorInfo: true,
					phone:''
				})
				this.showTips2s();
			}
		}
	},
	showTips2s:function(){
		var that = this;
		this.setData({
			isShow: true
		})
		setTimeout(function(){
			that.setData({
				isShow: false
			})
		}, 2000)
	}	
})
