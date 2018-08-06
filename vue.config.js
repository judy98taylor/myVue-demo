// https://cli.vuejs.org/zh/config/
module.exports = {
  // 应用是被部署在 生产环境：域名的子路径 开发环境：域名的根路径
  baseUrl: process.env.NODE_ENV !== "development" ? "/myVue-demo/dist/" : "/"
};
