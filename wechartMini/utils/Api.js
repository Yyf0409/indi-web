var code = {
  1: "没有网络",
  999: "无效的请求",
  5000: "没有这些电影"
}

function Api(params) {
  /*params 对象包含 url,success,method,data */
  if(!params.method){
      params.method ="GET";
  }
  wx.request({
      url:params.url,
      method:params.method,
      data:params.data,
      header: {
          'Content-Type': 'json'
      },
      success: function (res) {
          var statusCode = res.statusCode.toString();
          if (statusCode.startsWith("2")) {
              params.success(res.data);
          } else {

              var errorCode = res.data.code;
              _show_error(errorCode);
          }
          wx.hideNavigationBarLoading();
      },
      fail: err => {
          _show_error(1);
      }
  })
}

function _show_error(errorCode) {
  wx.showToast({
      title: code[errorCode],
      icon: "none",
      duration: 2000
  })
}
export {
  Api
};