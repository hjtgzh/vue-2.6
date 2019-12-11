<!--
 * @文件描述: 入口文件
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-04 15:24:25
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-12-11 15:51:13
 -->
<template>
  <el-container :class="styles.app" v-if="user.isLogin()">
    <el-aside :class="styles.navSide">
      <el-menu
        router
        unique-opened
        :default-active="$route.path"
        :class="styles.elMenu"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="item in menuList">
          <template v-if="item.child">
            <el-submenu :index="item.index" :key="item.name">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="childItem in item.child">
                <el-menu-item :index="childItem.index" :key="childItem.name">
                  {{ childItem.name }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.name">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div :class="styles.commonHeader">
          <div :class="styles.title">
            <Icon type="zhedie" :size="16" />
            <span>后台系统</span>
          </div>
          <div :class="styles.handleBt">
            <span>欢迎您</span>
            <span @click="logout">登出</span>
          </div>
        </div>
      </el-header>
      <el-main>
        <div :class="styles.contentWrap"><router-view /></div>
      </el-main>
    </el-container>
  </el-container>
  <router-view v-else />
</template>
<script>
import Icon from "@/components/icon";
import { menuList } from "./constant";
import user from "./utils/user";
import styles from "./App.module.less";
export default {
  components: {
    Icon
  },
  data() {
    return {
      user,
      styles,
      activeIndex: "/",
      menuList
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
      // console.log("key", key);
      // console.log("keyPath", keyPath);
      this.activeIndex = keyPath;
    },
    /* 退出登录 */
    logout() {
      this.user.logout();
      this.$router.replace("/login");
    }
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>
