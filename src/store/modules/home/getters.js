/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-07-30 21:39:01
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-05 16:08:04
 */

// 提供用来获取state数据的方法
export const getters = {
  // 路线分布
  routeDistributeOption(state) {
    const routeDistribute = state.routeDistribute;
    return routeDistribute;
  }
};
