/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-07-30 21:36:33
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-05 19:11:43
 */

// 提供存储设置state数据的方法
export const mutations = {
  // 路线分布
  routeDistribute(state, payload) {
    state.routeDistribute = payload;
    state.error = false;
  },
  error(state) {
    state.error = true;
  }
};
