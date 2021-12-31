import Mock from 'mockjs'
import baseURL from '@/config/baseUrl'

import * as templateInfo from './model/templateInfo'

createMockModel(templateInfo, true);

/**
 * 创建mock模拟数据
 * @param {*} model 模块
 * @param {*} isOpen 是否开启拦截
 */
function createMockModel(model, isOpen = true) {
  if (isOpen) {
    for (var key in model) {
      ((res) => {
        if (!baseURL.endsWith("/")) {
          baseURL = baseURL + "/"
        }

        let url = res.url;
        if(url.startsWith('/')){
          url = url.replace(/^\//g, '')
        }
        
        url = baseURL + url
        console.log(url)
        Mock.mock(new RegExp(url), res.type, (opts) => {
          opts['data'] = opts.body ? JSON.parse(opts.body) : null
          delete opts.body
          console.log('\n')
          console.log('%cmock拦截, 请求: ', 'color:blue', opts)
          console.log('%cmock拦截, 响应: ', 'color:blue', res.data)
          return res.data
        })
      })(model[key]() || {})
    }
  }
}
