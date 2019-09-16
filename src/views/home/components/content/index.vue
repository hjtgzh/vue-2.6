<!--
 * @文件描述: 
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-04 15:24:25
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-11 14:02:55
 -->
<template>
  <div class="table">
    <el-table :data="warehouseList" style="width: 100%">
      <el-table-column label="标题">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.storageTypeDesc }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.storageTypeDesc }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="地址">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      // getWarehouseList:getWarehouseList
    };
  },
  computed: {
    ...mapGetters("home", ["getWarehouseList"]),
    ...mapState("home", ["warehouseList"])
  },
  methods: {
    ...mapActions("home", ["fetchWarehouseList"])
  },
  created() {
    this.fetchWarehouseList({
      locationCity: 110100
    });
  }
};
</script>
