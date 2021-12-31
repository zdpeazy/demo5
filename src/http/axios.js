import axios from "axios";
import qs from 'qs';
import config from './setup'
import { dateFormat, getSig } from '@/utils'
import { APPKEY_KEY as APPKEY } from "@/config";
import baseURL from '@/config/baseUrl';

export default function $axios(options){
  const {
    jsonHeaders,
    formHeaders,
    formDataHeaders,
    timeout,
    withCredentials
  } = config;
  const {
    isFilter = false, // 如果isFilter为true，则所有的请求的响应数据都被返回回去
    method
  } = options;


  const isFormData = options.params instanceof FormData;
  let headers;
  if(method.toLowerCase() === 'post'){
    headers = !isFormData ? formHeaders : formDataHeaders;
  } else {
    headers = jsonHeaders;
  }

  if(options.isFilter){
    delete options.isFilter;
  }

  return new Promise(async (resolve, reject) => {
    const instance = axios.create({
      baseURL,
      headers,
      timeout,
      withCredentials
    })

    // 请求拦截器
    instance.interceptors.request.use(
      config => {
        let {
          method,
          params
        } = config

        Object.assign(params, {
          appkey: APPKEY,
          timestamp: dateFormat(new Date()),
        })
        params['sig'] = getSig(params);

        if(method.toLowerCase() === 'post'){
          config.data = !isFormData ? qs.stringify(params,{arrayFormat: 'indices', allowDots: true}) : params;
          config.params = {};
        }

        return config;
      },
      err => {
        return Promise.reject(err)
      }
    )

    // 响应拦截器
    instance.interceptors.response.use(
      response => {
        let data;
        if(response.data === undefined){ // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
          data = JSON.parse(response.request.responseText)
        } else {
          data = response.data;
        }

        return data;
      },
      err => {
        console.log(err)
        if(err && err.response){
          switch (err.response.status){
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权，请登录'
              break
            case 403:
              err.message = '拒绝访问'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            case 408:
              err.message = '请求超时'
              break
            case 500:
              err.message = '服务器内部错误'
              break
            case 501:
              err.message = '服务未实现'
              break
            case 502:
              err.message = '网关错误'
              break
            case 503:
              err.message = '服务不可用'
              break
            case 504:
              err.message = '网关超时'
              break
            case 505:
              err.message = 'HTTP版本不受支持'
              break
            default:
              err.message = `其他错误：错误码为${err.response.status}`
              break
          }
        } else {
          err.message = '网络错误，请检查是否连接网络或请求服务器网关是否正常';
        }

        return Promise.reject(err);
      }
    )

    try{
      let res = await instance(options);
      if(isFilter){
        resolve(res)
        return;
      }
      if(+res.code !== 0){
        const errorMsg = res.message ? res.message : res.msg;
        // 这里可以toast提示
        reject(errorMsg)
        return;
      }
      resolve(res.data)
    } catch (err){
      reject(err.message)
      throw new Error(err.message)
    }

  })
}
