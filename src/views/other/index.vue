<!--
 * @文件描述: other文件
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-04 15:24:25
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-18 18:04:40
 -->
<template>
  <el-carousel indicator-position="outside" :autoplay="false" height="380">
    <el-carousel-item v-for="item in 4" :key="item">
      <img :src="require('../../assets/banner' + item + '.png')" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import "./style.less";
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
