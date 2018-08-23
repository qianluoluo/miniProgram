//app.js
/* 
	App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。
	onLaunch: 全局只注册一次，小程序初始化完成时，会触发一次，全局只触发一次
	onShow: 小程序启动，或者由后台切入前台显示，会触发
	onHide：当小程序进入后台，会触发
	onError：脚本错误或api调用错误，参数会带上错误信息
	onPageNotFound: 小程序要打开的页面不存在，触发，参数带着错误信息。
	除开生命周期函数，可以随意定义函数，在页面中使用this.funName 即可访问
*/
App({
	globalData: {
		userInfo: 'qianluoluo',
		nickName:'luoluo'
	},
	onLaunch: function () {
		// 展示本地存储能力
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs', logs)

		// 登录
		wx.login({
			success: res => {
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
			}
		})
		// 获取用户信息
		wx.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
					wx.getUserInfo({
						success: res => {
						// 可以将 res 发送给后台解码出 unionId
							this.globalData.userInfo = res.userInfo
						// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
						// 所以此处加入 callback 以防止这种情况
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
				}
			}
		});
	}
})