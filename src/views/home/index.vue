<!--
 * @文件描述: 
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-04 15:24:25
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-11 13:38:47
 -->
<template>
  <div class="content">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
import Header from "./components/header";
import Content from "./components/content";
import "./style.less";
export default {
  components: {
    Header,
    Content
  },
  data() {
    return {};
  },
  computed: {
    // ...mapGetters("home", ["routeDistributeOption"])
  },
  methods: {
    // ...mapActions("home", ["fetchGetRouteDistribute"])
  },
  mounted() {
    // this.fetchGetRouteDistribute({ type: 0 });
  }
};
</script>
