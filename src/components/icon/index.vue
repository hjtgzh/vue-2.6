<!--
 * @文件描述: icon组件
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-06 16:16:07
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-10 14:52:55
 -->
<template>
  <i :class="`iconfont icon-${type}`" :style="styles"></i>
</template>

<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#909399"
    },
    size: {
      type: Number,
      default: 16
    }
  },
  computed: {
    styles() {
      return {
        fontSize: `${this.size}px`,
        color: this.color
      };
    }
  }
};
</script>
