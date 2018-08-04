// https://cli.vuejs.org/zh/config/
module.exports = {
  // baseUrl: "/myVue-demo/dist/"
  baseUrl: process.env.NODE_ENV !== "development" ? "/myVue-demo/dist/" : "/"
};
