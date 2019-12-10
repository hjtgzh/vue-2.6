const path = require("path");

module.exports = {
  // 输出文件目录
  outputDir: "build",
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve("src"));
  },
  productionSourceMap: false,
  css: {
    // vue-cli3, 暂时不要配置cssloader中的module为true即可, 他会把所有的认为是模块, 会出问题
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        javascriptEnabled: true, //less 配置
        localIdentName: "[name]-[hash]"
        // camelCase: "only"
      }
    }
  }
};
