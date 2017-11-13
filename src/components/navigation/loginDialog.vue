<template>
  <el-dialog title="Log In" :visible.sync="visibleDialog" :before-close="closeDialog" >
    <el-form ref="loginForm" :model="form" :rules="LogInRules" inline label-position="top" v-loading.body="loading">
      <el-form-item label="Login" :label-width="formLabelWidth" prop="login">
        <el-input v-model="form.login" auto-complete="off" icon="fa-user"></el-input>
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off" icon="fa-key"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleLogin">Sign in</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'loginDialog',
  mixins: [require('../../mixins.js')],
  props: ['visible'],
  computed: {
    visibleDialog: function(){
      return this.visible;
    }
  },
  data () {
    return {
      formLabelWidth: "120px",
      loading: false,
      form: {
        login: '',
        password: '',
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
      }
    }
  },
  methods: {
    closeDialog: function(){
      this.$emit('update:visible', false)
    },
    resetData: function() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    handleLogin: function(){
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$http.post(this.$http.options.root + 'auth/create_token', {"username" : this.form.login, 'password' : this.form.password })
          .then((response) => {
                  // success callback
                  this.$store.commit('logIn', {
                    username: response.body.username,
                    access_token: response.body.access_token
                  });
                  this.loading = false;
                  this.closeDialog();
                  this.resetData();
                  this.openNotify("Logged In", "Hello " + response.body.username, "success");
              }, (response) => {
                  this.openNotify("Not logged in", "Wrong email or password", "error");
                  this.resetData();
                  this.loading = false;
                  this.closeDialog();
              })
          return true;
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
