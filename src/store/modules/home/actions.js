/*
 * @文件描述: action文件
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-07-30 21:29:40
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-11 11:55:34
 */
import api from "@/api";

// 提供跟后台接口打交道的方法，并调用mutations提供的方法
export const actions = {
  // 仓库列表
  async fetchWarehouseList({ commit }, params) {
    const result = await api.post("/warehouse/supplyDynamics", params);
    if (result.success) {
      commit("warehouseList", result.data.list);
    } else {
      commit("error", result.message);
    }
  }
};
