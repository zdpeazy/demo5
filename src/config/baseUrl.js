// stars-cli脚手架配置process.env.NODE_ENV 有4类环境： dev test stage prod
const baseURL = {
  development: {
    openApi: '//open.d.api.edaijia.cn'
  },
  test: {
    openApi: '//open.d.api.edaijia.cn'
  },
  stage: {
    openApi: '//open.api.edaijia.cn'
  },
  production: {
    openApi: '//open.api.edaijia.cn'
  }
}

export default baseURL[process.env.NODE_ENV].openApi


