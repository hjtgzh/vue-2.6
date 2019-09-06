<!--
 * @文件描述: 
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-04 15:24:25
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-06 10:37:35
 -->
<template>
  <div>
    <ol v-for="(i, index) in 5" :key="index">
      <li>item</li>
    </ol>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("home", ["routeDistributeOption"])
  },
  methods: {
    ...mapActions("home", ["fetchGetRouteDistribute"])
  },
  mounted() {
    this.fetchGetRouteDistribute({ type: 0 });
  }
};
</script>
