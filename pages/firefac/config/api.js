// 以下是业务服务器API地址
// 云平台测试时使用
var WxApiRoot = 'https://test-0j2wkomi3jpe.firefac.cn/openapi/'
// 云平台上线时使用
//var WxApiRoot = 'https://ell968bhpgj5.firefac.cn/openapi/';

module.exports = {
  LiveRoomList: WxApiRoot + 'live/list', //直播房间列表
  LiveRoomStatusUpdate: WxApiRoot + 'live/status/update', //直播房间列表
};