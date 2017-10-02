<template>
  <div class="menu">
    <el-popover
      ref="notLogged"
      placement="bottom"
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
      placement="bottom"
      width="160"
      v-model="popover[1].state"
      trigger="manual">
      <div style="text-align: center; width: 160px">
        <p class="popoverP">Hello {{user.name}}</p>
        <el-button type="primary" size="mini" @click="userLogout">Log Out</el-button>
      </div>
    </el-popover>

    <el-dialog title="Log In" :visible.sync="dialog[0]">
      <el-form ref="loginForm" :model="form[0]" :rules="LogInRules" inline label-position="top">
        <el-form-item label="Login" :label-width="formLabelWidth" prop="login">
          <el-input v-model="form[0].login" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="form[0].password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleLogin">Sign in</el-button>
      </span>
    </el-dialog>

    <el-dialog title="Register" :visible.sync="dialog[1]">
      <el-form ref="registerForm" :model="form[1]" :rules="registerRules" label-position="top">
        <el-form-item label="Email" :label-width="formLabelWidth" prop="email">
          <el-input v-model="form[1].email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Login" :label-width="formLabelWidth" prop="login">
          <el-input v-model="form[1].login" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="form[1].password" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleRegister">Register</el-button>
      </span>
    </el-dialog>



    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/home">Wklej-ork-frontend</el-menu-item>
      <el-menu-item index="/paste">Paste</el-menu-item>
      <el-menu-item index="/view">View</el-menu-item>
      <el-menu-item index="/home" v-if="user.loggedIn" v-popover:Logged v-on:click="changePopoverState(1)" ><!-- User logged in -->
        <i class="fa fa-user" aria-hidden="true"></i>
      </el-menu-item>
      <el-menu-item index="/home" v-else v-popover:notLogged v-on:click="changePopoverState(0)"><!-- User not logged in -->
        <i class="fa fa-user-o" aria-hidden="true"></i>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
import loginDialog from "@/components/navigation/loginDialog.vue";
//TO DO move everything into separate components
export default {
  name: 'menu',
  data () {
    return {
      popover : [{state: false}, {state: false}],
      dialog: [false, false],
      formLabelWidth: "120px",
      form: [
        {
        login: '',
        password: ''
        },
        {
        email: '',
        login: '',
        password: '',
        }],

      registerRules: {
        login: [
          { required: true, message: 'Please input Login', trigger: 'blur'},
          { min: 3, message: 'Length should at least 3 characters', trigger: 'blur' }
        ],
        password: [
          {required: true, message: 'Please input Password', trigger: 'blur'},
          { min: 8, message: 'Length should at least 8 characters', trigger: 'blur' }
        ],
        email: [
          {required: true, message: 'Please input Email', trigger: 'blur'},
          { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ],
      },

      LogInRules: {
        login: [
          { required: true, message: 'Please input Login', trigger: 'blur'},
          { min: 3, message: 'Length should at least 3 characters', trigger: 'blur' }
        ],
        password: [
          {required: true, message: 'Please input Password', trigger: 'blur'},
          { min: 8, message: 'Length should at least 8 characters', trigger: 'blur' }
        ]
      },

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
      for(let i=0; i < popoverLength; i++){
        this.popover[i].state = false;
      }
    },
    handleSelect: function(key, keyPath) {
      // I really dunno what this does, but I got a warn in the console so there it is!
    },
    handleLogin: function(){
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          alert('submit!');
          return true;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleRegister: function(){
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          alert('submit!');
          return true;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    userLogin: function(){
      this.dialog[0] = true;
      this.closeAllPopovers();
    },
    userRegister: function(){
      this.dialog[1] = true;
      this.closeAllPopovers();
    },
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
