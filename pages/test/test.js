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

function createSong(src, { poster, name, author }) {
  const obj = {};
  obj.src = src;
  obj.poster = poster;
  obj.name = name;
  obj.author = author;

  return obj;
}

const musicList = [];

musicList[0] = createSong(
  "https://f002.fib.one/file/backend1/John+Williams-Domenico+Scarlatti:+Sonata+for+Harpsichord+in+E+major%2C+K+380%2BL+23.mp3",
  {
    poster:
      "https://f002.fib.one/file/backend1/John+Williams-The+Ultimate+Guitar+Collection.webp",
    name: "Domenico Scarlatti: Sonata for Harpsichord in E major, K 380/L 23",
    author: "John Williams",
  }
);

musicList[1] = createSong(
  "https://f002.fib.one/file/backend1/John+Williams-Francisco+Ta%CC%81rrega:+Recuerdos+De+La+Alhambra.mp3",
  {
    poster:
      "https://f002.fib.one/file/backend1/John+Williams-The+Ultimate+Guitar+Collection.webp",
    name: "Francisco Tárrega: Recuerdos De La Alhambra",
    author: "John Williams",
  }
);

musicList[2] = createSong(
  "https://f002.fib.one/file/backend1/John+Williams-Gabriel+Faure%CC%81:+Pavane.mp3",
  {
    poster:
      "https://f002.fib.one/file/backend1/John+Williams-The+Ultimate+Guitar+Collection.webp",
    name: "Gabriel Fauré: Pavane",
    author: "John Williams",
  }
);

musicList[3] = createSong(
  "https://f002.fib.one/file/backend1/John+Williams-Traditional:+Romance+for+Guitar.mp3",
  {
    poster:
      "https://f002.fib.one/file/backend1/John+Williams-The+Ultimate+Guitar+Collection.webp",
    name: "Traditional: Romance for Guitar",
    author: "John Williams",
  }
);

let playing = 0;
let listLength = musicList.length;

const innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.autoplay = false;
innerAudioContext.src = musicList[playing].src;
// console.log(innerAudioContext);

Page({
  /**
   * 页面的初始数据
   */
  innerAudioContext,
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
    switchValue: "关",
    switch1: false,
    switch2: true,
    musicList,
    listLength,
    playing,
    playStatus: "Play",
    volume: 1.0,
    songLength: 0,
    songPoint: 0,
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

    this.innerAudioContext.onCanplay(() => {
      this.innerAudioContext.duration;
      setTimeout(() => {
        this.setData({
          songLength: Math.floor(this.innerAudioContext.duration),
        });
      }, 0);
    });

    this.innerAudioContext.onPlay(() => {
      // this.innerAudioContext.duration;
      setInterval(() => {
        // console.log(Math.floor(this.innerAudioContext.currentTime));
        this.setData({
          songPoint: Math.floor(this.innerAudioContext.currentTime),
        });
      }, 1000);
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
    this.setData({
      show: true,
    });
  },

  exit() {
    this.setData({
      show: false,
    });
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

  checkS1nS2() {
    if (this.data.switch1 && this.data.switch2) {
      this.setData({
        switchValue: "开!",
      });
    } else {
      this.setData({
        switchValue: "休矣",
      });
    }
  },

  checkV1nV2(val1, val2, { setKey, trueValue, falseValue }) {
    const Data = {};
    if (val1 && val2) {
      Data[setKey] = trueValue;
      this.setData(Data);
    } else {
      Data[setKey] = falseValue;
      this.setData(Data);
    }
  },

  ifSet(boolValue, setKey) {
    const Data = {};
    if (boolValue) {
      Data[setKey] = true;
      this.setData(Data);
    } else {
      Data[setKey] = false;
      this.setData(Data);
    }
  },

  onSwitch1Change(e) {
    const val = e.detail.value;

    this.ifSet(val, "switch1");

    this.checkV1nV2(this.data.switch1, this.data.switch2, {
      setKey: "switchValue",
      trueValue: "开!",
      falseValue: "休矣",
    });
  },

  onSwitch2Change(e) {
    const val = e.detail.value;

    this.ifSet(val, "switch2");

    this.checkV1nV2(this.data.switch1, this.data.switch2, {
      setKey: "switchValue",
      trueValue: "开!",
      falseValue: "也休矣",
    });
  },
  mute() {
    this.innerAudioContext.volume = 0;
    this.setData({
      volume: 0,
    });
  },

  onVolumeChange(e) {
    const val = e.detail.value;

    this.innerAudioContext.volume = val;
    this.setData({
      volume: val,
    });
  },

  play() {
    if (this.data.playStatus === "Play") {
      this.innerAudioContext.play();
      this.setData({
        playStatus: "Pause",
      });
    } else {
      this.innerAudioContext.pause();
      this.setData({
        playStatus: "Play",
      });
    }
  },
  playNext() {
    let val = this.data.playing + 1;
    if (val < 0 || val > this.data.listLength - 1) {
      val = this.data.listLength - 1;
    }

    console.log(val);

    this.setData({
      playing: val,
    });

    this.innerAudioContext.src = this.data.musicList[val].src;
    this.innerAudioContext.play();
    this.setData({
      playStatus: "Pause",
    });
  },

  playPrevious() {
    let val = this.data.playing - 1;
    if (val < 0 || val > this.data.listLength - 1) {
      val = 0;
    }

    console.log(val);

    this.setData({
      playing: val,
    });

    this.innerAudioContext.src = this.data.musicList[val].src;
    this.innerAudioContext.play();
    this.setData({
      playStatus: "Pause",
    });
  },

  stopPlay() {
    this.innerAudioContext.stop();
    this.setData({
      playStatus: "Play",
    });
  },

  playPoint(e) {
    const val = e.detail.value;
    this.innerAudioContext.seek(val);
    this.setData({
      songPoint: val,
    });
  },

  onChangePlaying(e) {
    const val = e.detail.value;
    console.log(val);

    this.setData({
      playing: val,
    });
    this.innerAudioContext.src = this.data.musicList[val].src;
    this.innerAudioContext.play();
    this.setData({
      playStatus: "Pause",
    });
  },
});
