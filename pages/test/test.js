// pages/test/test.js
const htmlSnip = `<div class="div_class">
  <h1>Title</h1>
  <p class="p">
    Life is&nbsp;<i>like</i>&nbsp;a box of
    <b>&nbsp;chocolates</b>.
  </p>
</div>
`;

const nodeSnip = [
  {
    name: "div",
    attrs: {
      class: "div_class",
      style: "line-height: 60px; color: #1AAD19;",
    },
    children: [
      {
        type: "text",
        text: "You never know what you're gonna get.",
      },
    ],
  },
];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    show: false,
    htmlSnip,
    nodeSnip,
    content: "富文本编辑器",
    index: 0,
    array: [1, 1, 2, 3, 5],
    multiIndex: [0, 0],
    multiArray: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    date: "1900-01-01",
    time: "00:00",
    region: ["a", "b", "c"],
    pickArray: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    pickValue: [0, 0, 0],
    radioArray: {
      12: "爱",
      23: "不",
      34: "爱",
      45: "我",
      56: "?",
    },
    radioValue: {
      key: "key",
      value: "value",
    },
    sliderLabel: "客官,来玩啊~",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const systemInfo = wx.getSystemInfoSync();
    const width = systemInfo.windowWidth;
    const height = systemInfo.windowHeight;
    this.setData({
      height: height,
      width: width,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  showOn() {
    this.setData({ show: true });
  },

  exit() {
    this.setData({ show: false });
    // wx.navigateBack()
  },

  onCheckChange(e) {
    console.log(e.detail.value);
  },

  onEditOver(e) {
    let detail = [];

    detail = e.detail;
    let { text, html, delta } = detail;
    // console.log(`text: ${text}, html: ${html}`);
    // console.log(delta);

    this.setData({
      content: text,
    });
  },

  saveContent() {
    this.setData({
      htmlSnip: this.data.content,
    });
  },

  onPickerChange(e) {
    console.log(e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  onMultiPickerChange(e) {
    console.log(e.detail.value);
    this.setData({
      multiIndex: e.detail.value,
    });
  },

  onDateChange(e) {
    console.log(e.detail.value);
    this.setData({
      date: e.detail.value,
    });
  },

  onTimeChange(e) {
    console.log(e.detail.value);
    this.setData({
      time: e.detail.value,
    });
  },

  onRegionChange(e) {
    console.log(e.detail.value);
    this.setData({
      region: e.detail.value,
    });
  },

  onPickViewChange(e) {
    const val = e.detail.value;
    console.log(val);
    this.setData({
      pickValue: val,
    });
  },

  onRadioGroupChange(e) {
    const val = e.detail.value;
    console.log(val);
    let radio = {
      key: val,
      value: this.data.radioArray[val],
    };

    this.setData({
      radioValue: radio,
    });
  },

  onSliderChanging(e) {
    console.log(e.detail.value);
    this.setData({
      sliderLabel: "大力啊~啊~",
    });
  },

  onSliderChange(e) {
    this.setData({
      sliderLabel: "收!",
    });
    setTimeout(() => {
      this.setData({
        sliderLabel: "客官,快来玩啊~",
      });
    }, 500);
  },
});
