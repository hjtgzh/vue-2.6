/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-07-30 21:39:01
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-16 16:38:27
 */

// 从 store 中的 state 中派生出一些状态,就像计算属性一样,
// getter 的返回值会根据它的依赖被缓存起来,且只有当它的依赖值发生了改变才会被重新计算
export const getters = {
  // 通知列表
  // getWarehouseList: state => state.warehouseList
};
