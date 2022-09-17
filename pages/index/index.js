// index.js
// 获取应用实例
const app = getApp()
// app[rb.para.name].track

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    loginId: ''
  },
  sendTrack(e) {
    console.log(e)
    app.rb.track('trackTest', {
      name: 'track事件',
    });
  },

  jumpPage() {
    wx.navigateTo({
      url: '../fristpage/fristpage',
    })
  },
  setVal(e){
    let key = e.currentTarget.dataset.key;
    this.data[key] = e.detail.value;


  },
  sendLogin() {
    console.log(this.data.loginId)
    app.rb.login(this.data.loginId);
  },
  logout(){
		// 切换回匿名 ID
		app.rb.logout();
	},
  getUserProfile(e) {
    // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        if (res.userInfo) {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          app.rb.setProfile(res.userInfo);
        }
      }
    })
  },
  getUserInfo(e) {
    console.log(e);
    // 不推荐使用 getUserInfo 获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    if (e.detail.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      app.rb.setProfile({
        ...e.detail.userInfo
      });

    }
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShareAppMessage() { },
  onShareTimeline() { },
})
