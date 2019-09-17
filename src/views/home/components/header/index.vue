<!--
 * @文件描述: 
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-04 15:24:25
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-17 16:09:35
 -->
<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="时间">
      <el-date-picker
        v-model="formInline.time"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        clearable
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域" clearable>
        <el-option label="上海" value="shanghai"></el-option>
        <el-option label="北京" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      formInline: {
        time: "",
        region: ""
      }
    };
  },
  methods: {
    // ...mapActions("home", ["fetchWarehouseData"]),
    onSubmit() {
      // console.log("value", this.formInline);
      // this.fetchGetRouteDistribute({ type: 0 });
    }
  }
};
</script>
