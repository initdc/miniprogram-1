// components/cameraPlugin/cameraPlugin.js
const ctx = wx.createCameraContext();
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    src: "",
    videoSrc: "",
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLoad() {
      this.ctx = wx.createCameraContext();
    },
    takePhoto() {
      this.ctx.takePhoto({
        quality: "high",
        success: (res) => {
          this.setData({
            src: res.tempImagePath,
          });
        },
      });
    },
    startRecord() {
      this.ctx.startRecord({
        success: (res) => {
          console.log("startRecord");
        },
      });
    },
    stopRecord() {
      this.ctx.stopRecord({
        success: (res) => {
          this.setData({
            src: res.tempThumbPath,
            videoSrc: res.tempVideoPath,
          });
        },
      });
    },
    error(e) {
      console.log(e.detail);
    },
  },
});
