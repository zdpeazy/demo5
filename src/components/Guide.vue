<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{templateInfo.fastEntrance.name}}</h3>
    <ul>
      <li v-for="item in templateInfo.fastEntrance.list" :key="item.name"><a :href="item.url" target="_blank" rel="noopener">{{item.name}}</a></li>
    </ul>
    <h3>{{templateInfo.ecosystem.name}}</h3>
    <ul>
      <li v-for="item in templateInfo.ecosystem.list" :key="item.name"><a :href="item.url" target="_blank" rel="noopener">{{item.name}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    templateInfo: Object
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
