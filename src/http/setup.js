export default {
  method: 'get',
  jsonHeaders: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  formHeaders: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  formDataHeaders: {
    'Content-Type': 'multipart/form-data'
  },
  timeout: 10000,
  withCredentials: true,
  responseType: 'json'
}
