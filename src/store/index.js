/*
 * @文件描述: store配置文件
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-07-30 15:37:48
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-05 18:00:22
 */
import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    home
  }
});
