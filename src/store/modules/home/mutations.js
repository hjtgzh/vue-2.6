/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-07-30 21:36:33
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-17 13:48:40
 */

// 提供存储设置state数据的方法
export const mutations = {
  // 仓库列表数据
  warehouseData(state, payload) {
    state.warehouseData = payload;
  }
};
