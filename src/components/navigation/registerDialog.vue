<template>
  <el-dialog title="Register" :visible.sync="visibleDialog" :before-close="closeDialog">
    <el-form ref="registerForm" :model="form" :rules="registerRules" label-position="top">
      <el-form-item label="Email" :label-width="formLabelWidth" prop="email">
        <el-input v-model="form.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Login" :label-width="formLabelWidth" prop="login">
        <el-input v-model="form.login" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth" prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleRegister">Register</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'registerDialog',
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
