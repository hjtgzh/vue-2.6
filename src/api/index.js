/*
 * @文件描述: 接口请求配置文件
 * @公司: thundersdata
 * @作者: 黄建停
 * @Date: 2019-09-05 11:25:37
 * @LastEditors: 黄建停
 * @LastEditTime: 2019-09-05 19:15:52
 */
import lscache from "lscache";
import service, { errorHandler } from "./axiosService";
import qs from "qs";

export default {
  // get 请求
  get: async function(url, params) {
    try {
      const res = await service.get(url, {
        params
      });
      return res.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  // get 带token请求
  getWithToken: async function(url, params) {
    try {
      const res = await service.get(url, {
        params,
        headers: { accessToken: lscache.getToken() }
      });
      return res.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  // delete 带token请求
  delWithToken: async function(url, params) {
    try {
      const res = await service.delete(url, {
        params,
        headers: { accessToken: lscache.getToken() }
      });
      return res.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  // post 请求
  post: async function(url, data, params) {
    // data添加到请求体body中
    try {
      const res = await service.post(url, qs.stringify(data), {
        params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      return res.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  // post 带token请求
  postWithToken: async function(url, data, params) {
    // data添加到请求体body中
    try {
      const res = await service.post(url, qs.stringify(data), {
        params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accessToken: lscache.getToken()
        }
      });
      return res.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  // json post 请求
  postJson: async function(url, data, params) {
    // data添加到请求体body中
    try {
      const res = await service.post(url, data, {
        params,
        headers: {
          "Content-Type": "application/json",
          accessToken: lscache.getToken()
        }
      });
      return res.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  // put 带token请求
  putWithToken: async function(url, data, params) {
    try {
      const res = await service.put(url, data, {
        params
      });
      return res.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  // 上传 请求
  upload: async function(url, formData) {
    // data 添加到请求体body中
    try {
      const res = await service.post(
        url + "?access_token=" + lscache.getToken(),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      return res.data;
    } catch (error) {
      return errorHandler(error);
    }
  }
};
