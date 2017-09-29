<template>
  <div class="menu">
    <el-popover
      ref="notLogged"
      placement="top"
      width="160"
      v-model="visible2">
      <p>Are you sure to delete this?</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible2 = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="visible2 = false">confirm</el-button>
      </div>
    </el-popover>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/home">Wklej-ork-frontend</el-menu-item>
      <el-menu-item index="/paste">Paste</el-menu-item>
      <el-menu-item index="/view">View</el-menu-item>
      <el-menu-item v-popover:notLogged><i class="fa fa-user-o" aria-hidden="true"></i></el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      visible2 : "false"
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    }
  },
  methods: {
    handleSelect: function(key, keyPath) {
      // I really dunno what this does, but I got a warn in the console so there it is!
    },
    openUserPopover: function(){
      console.log("clicked");
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
