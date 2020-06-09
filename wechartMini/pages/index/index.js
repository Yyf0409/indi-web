import {Api} from "../../utils/Api"
var app = getApp();
Page({

 
  /**
   * 页面的初始数据
   */
  data: {
      currentData : 0,
      douban: []
  },

  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  callApi(url) {
    const that  = this;
    wx.showNavigationBarLoading();
    Api({
      url,
      success: res => {
        that.setData({
          douban:res.subjects
        });
      }
    })
  },
  onLoad(){
    this.checkCurrent()
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
    let current_number;
    if(e==null||e==undefined){
      current_number="0"
    }else{
      current_number=e.target.dataset.current;
    }
    let url="";
    if(current_number==1){
      url=app.globalData.jinritoutiaoUrl
    }
    if(current_number==0){
      url=app.globalData.doubanUrl
    }
    this.callApi(url);
    // if (that.data.currentData === e.target.dataset.current){
    //     return false;
    // }else{
    //   that.setData({
    //     currentData: e.target.dataset.current
    //   })
    // }
  }
})