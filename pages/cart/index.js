// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // cartFoodList: [],
    // isCheckAll: true,
    // totalSum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.data.cartFoodList = JSON.parse(options.data)

    // this.setData({
    //   cartFoodList: this.data.cartFoodList
    // })
    // this.calcTotalSum();
  },

  // choose(e) {
  //   let index = e.currentTarget.dataset.idx;
  //   this.data.cartFoodList[index].checked = !this.data.cartFoodList[index].checked;

  //   let isCheckAll = this.data.cartFoodList.every(item => item.checked)

  //   //let isCheckAll = this.data.cartFoodList.every(item => {
  //   //  return item.checked == true
  //   //})

  //   this.setData({
  //     cartFoodList: this.data.cartFoodList,
  //     isCheckAll
  //   })
  //   this.calcTotalSum();
  // },

  // calcTotalSum() {
  //   let totalSum = 0;
  //   this.data.cartFoodList.forEach(item => {
  //     if (item.checked) {
  //       totalSum += item.price * item.count
  //     }
  //   })
  //   this.setData({
  //     totalSum
  //   })
  // },

  // chooseAll() {
  //   let isCheckAll = !this.data.isCheckAll;

  //   this.data.cartFoodList.forEach(function (item) {
  //     item.checked = isCheckAll;
  //   })

  //   this.setData({
  //     isCheckAll,
  //     cartFoodList: this.data.cartFoodList
  //   })
  //   this.calcTotalSum();
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})