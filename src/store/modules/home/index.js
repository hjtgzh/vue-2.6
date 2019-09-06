/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-07-30 21:27:10
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-05 19:08:47
 */
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

// 类似存储全局变量的数据
export const state = {
  routeDistribute: [],
  runInfo: [],
  goodsDistribution: [],
  error: false
};

const namespaced = true;

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
