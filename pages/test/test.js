// 在这里，获取一个app的实例
const test = getApp()

Page({
    data: {
        isShow: false
	},
	onLoad: function(query){
		console.log(query);
	},
    handledClick: function(){
        this.showTips2s();
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