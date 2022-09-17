// app.js
var rb = require('./utils/rainbowdata.min.js');

// 配置初始化参数
rb.setPara({
	name: 'rb',
	server_url: 'http://10.114.14.97:8888/collect/ma.gif',
	// 全埋点控制开关
	autoTrack: {
		appLaunch: true, // 默认为 true，false 则关闭 $MPLaunch 事件采集
		appShow: true, // 默认为 true，false 则关闭 $MPShow 事件采集
		appHide: true, // 默认为 true，false 则关闭 $MPHide 事件采集
		pageShow: true, // 默认为 true，false 则关闭 $MPViewScreen 事件采集
		pageShare: true, // 默认为 true，false 则关闭 $MPShare 事件采集
		mpClick: true, // 默认为 false，true 则开启 $MPClick 事件采集
		mpFavorite: true, // 默认为 true，false 则关闭 $MPAddFavorites 事件采集
		pageLeave: true,
	},
	//app_id
	app_id: '902cd11d13c74843',
	//app_secret
	app_secret: '5545c89054d547a395d719200c361d92',
	// session_id失效时间,单位s
	session_expired_time: 30,
	// 自定义渠道追踪参数，如 source_channel: ["custom_param"]
	source_channel: ['custom_param'],
	// 是否允许控制台打印查看埋点数据(建议开启查看)
	show_log: true,
	// 是否允许修改 onShareAppMessage 里 return 的 path，用来增加(登录 ID，分享层级，当前的 path)，在 app onShow 中自动获取这些参数来查看具体分享来源、层级等
	allow_amend_share_path: true,
	// autotrack_exclude_page:{ pageShow: ['pages/index/index'] },
	//配置指定页面不采集 $MPViewScreen 页面浏览事件
	preset_events: {}, //预置事件的自定义控制
	batch_send: true, //是否开启批量发送 批量发送是用的客户端时间，数据存储在storage里 非批量发送是用的服务端时间
});
//防止某些事件没有加上自定义公共属性
rb.registerApp({
	platform: '小程序',
});
// var i = 0;
// rb.registerApp({
// 	index: function () {
// 		return ++i; // 返回数字
// 	},
// 	istrue: function () {
// 		return i < 10 ? true : false; // 返回bool
// 	},
// 	isEmptyString: function () {
// 		return ''; // 返回字符串
// 	},
// 	isDate: function () {
// 		return new Date('December 17, 1995 03:24:00'); // 返回日期类型
// 	},
// 	isArrayOfStr: function () {
// 		return ['1', '2', '3']; // 返回元素是字符串的数组
// 	},
// });

// 自定义匿名 ID
// rb.identify('自定义匿名 ID', true);
//替换随机生成uuid，小程序杀死后uuid会变化更新成新的，调用setOpenid用openID做唯一性 调用时机在初始化之前，保证发送数据时已经是新的
// rb.setOpenid('yyds001');

// 如果需要使用 openid 作为匿名 ID，请单独获取 openid 之后调用 rb.setOpenid() 方法
// wx.request({
//   url: '后端获取 OpenID 的请求',
//   success: function (res) {
//     if (res.OpenID) {
//       rb.setOpenid(res.OpenID);
//     }
//   },
//   complete: function () {
//     // 如果获取 openid 失败，SDK 会以 UUID 作为匿名 ID 发数据
//     rb.init();
//   }
// });


// 初始化 SDK
rb.init();
// track事件
rb.track('click', {
	name: 'test-click-track',
});
// rb.login('12345');

console.log(__wxConfig, global);

App({
	onLaunch: function (options) {

		console.log(rb.getAnonymousID());
	},
	onShow: function (options) {
		console.log(11222);
	},
	onHide: function () { },
});
