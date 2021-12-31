import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log(`当前执行环境：${process.env.NODE_ENV}`)
// 是否启动数据mock
import isMock from './config/openMock'
isMock && require('./mock');

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
