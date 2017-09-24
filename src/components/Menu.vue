<template>
  <div class="menu">

    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/home">Wklej tekste </el-menu-item>
      <el-menu-item index="/wklej">Wklej</el-menu-item>
      <el-menu-item index="/zobacz">Zobacz</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // I really dunno what this does, but I got a warn in the console so there it is!
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
