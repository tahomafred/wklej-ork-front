<template>
  <div class="menu">
    <popoverLogged></popoverLogged>
    <el-popover
      ref="notLogged"
      placement="top"
      width="160"
      v-model="popover[0].state"
      trigger="manual">
      <div style="text-align: center; width: 160px">
        <el-button size="mini" type="success" @click="userLogin">Log In</el-button>
        <p class="popoverP"> or </p>
        <el-button type="primary" size="mini" @click="userRegister">Register</el-button>
      </div>
    </el-popover>
    <el-popover
      ref="Logged"
      placement="top"
      width="160"
      v-model="popover[1].state"
      trigger="manual">
      <div style="text-align: center; width: 160px">
        <p class="popoverP">Hello {{user.name}}</p>
        <el-button type="primary" size="mini" @click="userLogout">Log Out</el-button>
      </div>
    </el-popover>


    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/home">Wklej-ork-frontend</el-menu-item>
      <el-menu-item index="/paste">Paste</el-menu-item>
      <el-menu-item index="/view">View</el-menu-item>
      <el-menu-item v-if="user.loggedIn" v-popover:Logged v-on:click="changePopoverState(1)" ><!-- User logged in -->
        <i class="fa fa-user" aria-hidden="true"></i>
      </el-menu-item>
      <el-menu-item v-else v-popover:notLogged v-on:click="changePopoverState(0)"><!-- User not logged in -->
        <i class="fa fa-user-o" aria-hidden="true"></i>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
import popoverLogged from "@/components/navigation/popoverLogged.vue";
export default {
  components: {popoverLogged},
  name: 'menu',

  data () {
    return {
      popover : [{state: false}, {state: false}]
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    },
  },
  methods: {
    changePopoverState: function(whichOne){
      this.popover[whichOne].state = !this.popover[whichOne].state;
    },
    closeAllPopovers: function(){
      let popoverLength = this.popover.length;
      for(let i=0; i <= popoverLength; i++){
        this.popover[i].state = false;
      }
    },
    handleSelect: function(key, keyPath) {
      // I really dunno what this does, but I got a warn in the console so there it is!
    },
    userLogin: function(){ this.user.loggedIn = true, this.closeAllPopovers();},
    userRegister: function(){this.closeAllPopovers();},
    userLogout: function(){
      this.user.loggedIn = false;
      this.closeAllPopovers();
    },

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
.popoverP{
  display: inline;
}
</style>
