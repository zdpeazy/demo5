import md5 from 'md5-js';
import {
  APPKEY_SECRET
} from '@/config';

// 日期格式化
const dateFormat = (date, format) => {
  format = format || 'yyyy-MM-dd hh:mm:ss'
  let o= {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

// 截取链接参数
const urlGet = () => {
  let args = {}
  let query = location.search.substring(1)
  let pairs = query.split('&')
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf('=')
    if (pos === -1) continue
    let argname = pairs[i].substring(0, pos)
    let value = pairs[i].substring(pos + 1)
    value = decodeURIComponent(value)
    args[argname] = value
  }
  return args
}

// 获取sig
const getSig = (param) => {
  let paramStr = []
  let paramStrSorted = []
  for (let n in param) {
    paramStr.push(n)
  }
  paramStr = paramStr.sort()
  paramStr.forEach(item => {
    paramStrSorted.push(item + param[item])
  })
  let text = APPKEY_SECRET + paramStrSorted.join('') + APPKEY_SECRET;
  return md5(text).slice(0, 30);
}

export {
  dateFormat,
  urlGet,
  getSig
}
