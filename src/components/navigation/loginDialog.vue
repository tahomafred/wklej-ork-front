<template>
  <el-dialog title="Log In" :visible.sync="visibleDialog" :before-close="closeDialog">
    <el-form ref="loginForm" :model="form" :rules="LogInRules" inline label-position="top">
      <el-form-item label="Login" :label-width="formLabelWidth" prop="login">
        <el-input v-model="form.login" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
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
  props: ['visible'],
  computed: {
    visibleDialog: function(){
      return this.visible;
    }
  },
  data () {
    return {
      formLabelWidth: "120px",
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
