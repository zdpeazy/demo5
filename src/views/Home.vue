<template>
  <div class="home">
    <div>jira-2.2</div>
    <div>jira-2.1</div>
    <div>jira-2</div>
    <div>jira-1</div>
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <Guide v-if="showGuide" :msg="templateInfo.title" :templateInfo="templateInfo"/>
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue'
import { mGetTplInfo } from '../http/actions'


export default {
  name: 'Home',
  components: {
    Guide
  },
  data() {
    return {
      templateInfo: {}
    }
  },
  async mounted () {
    let res = await mGetTplInfo();
    this.templateInfo = res;
  },
  computed: {
    showGuide(){
      return Object.keys(this.templateInfo).length > 0
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  .logo{
    width: 80px;
  }
}
</style>
