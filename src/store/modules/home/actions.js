/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-07-30 21:29:40
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-05 19:25:04
 */
import api from "@/api";

// 提供跟后台接口打交道的方法，并调用mutations提供的方法
export const actions = {
  // 路线分布
  async fetchGetRouteDistribute({ commit }, params) {
    const result = await api.get("/hotCity/getHotCityLabelListByType", params);
    if (result.success) {
      commit("routeDistribute", result.data);
    } else {
      commit("error", result.message);
    }
  }
};
