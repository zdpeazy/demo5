const devOrigin = 'm.dev.edaijia.cn'; // 开发域名，根据host配置决定可以修改
const cdnOrigin = { // 
  test: 'stars-cli-dev.oss-cn-beijing.aliyuncs.com',
  stage: 'stars-cli-stage.oss-cn-beijing.aliyuncs.com',
  prod: 'stars-cli-prod.oss-cn-beijing.aliyuncs.com'
}
const port = '9001';

module.exports = {
  title: 'vue2模板',
  keywords: '前端，脚手架，模板，stars-cli，vue、jquery，react、axios，mock，h5',
  description: '前端脚手架stars-cli，基于vue2.0配置的标准模板，集成vue生态，封装常用工具方法类，开箱即用，快速部署',
  webSocketURL: `ws://${devOrigin}:${port}/ws`, 
  cdnPath: {
    test: `https://${cdnOrigin.test}/demo5/`,
    stage: `https://${cdnOrigin.stage}/demo5/`,
    prod: `https://${cdnOrigin.prod}/demo5/`
  },
  frame: "vue",
  alias: {},
  devOrigin,
  port,
  proxy: {},
  eslintRules: {},
  eslintIgnores: [],
  stylelintRules: {},
  stylelintIgnores: []
}
