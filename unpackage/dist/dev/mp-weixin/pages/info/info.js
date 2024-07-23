"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dog: {
        name: "",
        breed: "",
        age: "",
        height: "",
        weight: ""
      }
    };
  },
  methods: {
    registerDog() {
      if (!this.dog.name || !this.dog.breed || !this.dog.age || !this.dog.height || !this.dog.weight) {
        common_vendor.index.showToast({
          title: "请填写所有信息",
          icon: "none"
        });
        return;
      }
      common_vendor.index.setStorageSync("dogInfo", this.dog);
      common_vendor.index.navigateTo({
        url: "/pages/home/home"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.dog.name,
    b: common_vendor.o(($event) => $data.dog.name = $event.detail.value),
    c: $data.dog.breed,
    d: common_vendor.o(($event) => $data.dog.breed = $event.detail.value),
    e: $data.dog.age,
    f: common_vendor.o(($event) => $data.dog.age = $event.detail.value),
    g: $data.dog.height,
    h: common_vendor.o(($event) => $data.dog.height = $event.detail.value),
    i: $data.dog.weight,
    j: common_vendor.o(($event) => $data.dog.weight = $event.detail.value),
    k: common_vendor.o((...args) => $options.registerDog && $options.registerDog(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f52d2d81"], ["__file", "D:/code/猫舍/pages/info/info.vue"]]);
wx.createPage(MiniProgramPage);
