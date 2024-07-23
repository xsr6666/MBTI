"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dog: {},
      currentTip: ""
    };
  },
  mounted() {
    const dogInfo = common_vendor.index.getStorageSync("dogInfo");
    if (dogInfo) {
      this.dog = dogInfo;
      this.generateTip();
    } else {
      common_vendor.index.navigateTo({
        url: "/pages/info/info"
      });
    }
  },
  methods: {
    generateTip() {
      const age = parseInt(this.dog.age);
      const breed = this.dog.breed;
      if (age < 1) {
        this.currentTip = `小狗在 ${age} 岁以下需要注射疫苗。`;
      } else if (age >= 1 && age < 3) {
        this.currentTip = `1-3岁的 ${breed} 需要除毛。`;
      } else if (age >= 3) {
        this.currentTip = `${breed} 需要定期进行健康检查，尤其是关节和心脏。`;
      } else {
        this.currentTip = `定期带 ${this.dog.name} 去体检，确保身体健康。`;
      }
    },
    showTip() {
    },
    closeTip() {
    }
  }
};
if (!Array) {
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  _component_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.dog.name),
    b: common_vendor.t($data.dog.breed),
    c: common_vendor.t($data.dog.age),
    d: common_vendor.t($data.dog.height),
    e: common_vendor.t($data.dog.weight),
    f: common_vendor.o((...args) => $options.showTip && $options.showTip(...args)),
    g: common_vendor.t($data.currentTip),
    h: common_vendor.o((...args) => $options.closeTip && $options.closeTip(...args)),
    i: common_vendor.sr("popup", "07e72d3c-0"),
    j: common_vendor.p({
      type: "dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-07e72d3c"], ["__file", "D:/code/猫舍/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
