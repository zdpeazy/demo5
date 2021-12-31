// 获取模板初始信息
export function templateInfo() {
  const templateInfo = {
    "code": 0,
    "msg": "ok",
    "data": {
      "title": document.title,
      "fastEntrance": {
        "name": '快捷入口',
        "list": [
          {
            "name": "Vue Docs",
            "url": "https://vuejs.org"
          },
          {
            "name": "Stars-cli",
            "url": ""
          },
        ]
      },
      "ecosystem": {
        "name": '生态系统',
        "list": [
          {
            "name": "vue-router",
            "url": "https://router.vuejs.org"
          },
          {
            "name": "vuex",
            "url": "https://vuex.vuejs.org"
          },
          {
            "name": "axios",
            "url": "https://github.com/axios/axios"
          },
          {
            "name": "mockjs",
            "url": "http://mockjs.com/"
          },
          {
            "name": "vue-devtools",
            "url": "https://github.com/vuejs/vue-devtools#vue-devtools"
          },
          {
            "name": "Vant",
            "url": "https://vant-contrib.gitee.io/vant/#/zh-CN/"
          },
          {
            "name": "Element UI",
            "url": "https://element.eleme.cn/#/zh-CN"
          },
          {
            "name": "awesome-vue",
            "url": "https://github.com/vuejs/awesome-vue"
          },
        ]
      }
    }
  }
  return {
    url: '/template/info/get',
    type: 'get',
    data: templateInfo
  }
}
