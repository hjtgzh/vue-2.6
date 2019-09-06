/*
 * @文件描述: axios请求设置
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-05 11:26:36
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-05 19:14:07
 */

import axios from "axios";
import qs from "qs";
import config from "./config";

// 请求接口
const baseURL =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.pro;

const axiosConfig = {
  baseURL,
  // 请求后的数据处理
  transformResponse: [
    function(data) {
      return data;
    }
  ],
  // 查询对象序列化函数
  paramsSerializer: function(params) {
    return qs.stringify(params);
  },
  // 跨域是否带token
  withCredentials: false,
  responseType: "json",
  // xsrf 设置
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  validateStatus: function(status) {
    return status >= 200 && status < 300;
  }
};

const service = axios.create(axiosConfig);

export default service;

export function errorHandler(error) {
  if (error.response) {
    const message = error.response.data
      ? error.response.data.message
      : "接口报错";
    return {
      success: false,
      message,
      code: 50000,
      data: null
    };
  } else if (error.message) {
    if (error.message === "Network Error") {
      return {
        success: false,
        code: 50000,
        data: null,
        message: "对不起，网络出现异常"
      };
    } else if (error.message.includes("timeout")) {
      return {
        success: false,
        code: 40400,
        data: null,
        message: "对不起，接口请求超时"
      };
    }
  }
  return {
    success: false,
    code: 40400,
    data: null,
    message: ""
  };
}
