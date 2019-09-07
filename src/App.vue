<!--
 * @文件描述: 入口文件
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-04 15:24:25
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-07 17:23:48
 -->
<template>
  <div id="app">
    <div class="nav-side">
      <el-menu
        :default-active="$route.path"
        class="el-menu"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group title="分组一">
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <!-- <Icon type="dituzhaocang" :size="30" color="#f00"></Icon> -->
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>
<script>
import "./App.less";
// import Icon from "@/components/icon";
export default {
  components: {
    // Icon
  },
  data() {
    return {
      activeIndex: "/"
    };
  },
  methods: {
    handleOpen() {
      // console.log(key, keyPath);
    },
    handleClose() {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath;
    }
  }
};
</script>
