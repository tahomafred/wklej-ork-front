<template>
  <el-dialog title="Register" :visible.sync="visibleDialog" :before-close="closeDialog">
    <el-row>
      <el-col span="15" offset="3">
        <el-form ref="registerForm" :model="form" :rules="registerRules" label-position="right" v-loading.body="loading">
          <el-form-item label="Email" :label-width="formLabelWidth" prop="email">
            <el-input v-model="form.email" auto-complete="off" icon="fa-envelope-o"></el-input>
          </el-form-item>
          <el-form-item label="Login" :label-width="formLabelWidth" prop="login">
            <el-input v-model="form.login" auto-complete="off" icon="fa-user"></el-input>
          </el-form-item>
          <el-form-item label="Password" :label-width="formLabelWidth" prop="password">
            <el-input type="password" v-model="form.password" auto-complete="off" icon="fa-key"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleRegister">Register</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'registerDialog',
  props: ['visible'],
  mixins: [require('../../mixins.js')],
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
        email: '',
        login: '',
        password: '',
      },
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

    }
  },
  methods: {
    closeDialog: function(){
      this.$emit('update:visible', false)
    },
    handleRegister: function(){
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$http.post(this.$http.options.root + 'auth/register_user', {"username" : this.form.login, 'password' : this.form.password, 'email' : this.form.email })
          .then((response) => {
                  // success
                  this.loading = false;
                  this.closeDialog();
                  this.resetData();
                  this.openNotify("Register Complete", "Hello " + response.body.username +  ". Please Log in.", "success");
              }, (response) => {
                  this.openNotify("Not logged in", "Wrong email or password", "error");
                  this.resetData();
                  this.loading = false;
                  this.closeDialog();
              })
          return true;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetData: function() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
