<template>

</template>

<script>
export default {
  name: 'loginDialog',
  props: ['visible'],
  computed: {
    visibleDialog(){
      return this.$store.state.dialog[0]
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
    handleLogin : function(){
      console.log(this.form);
      this.visible = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
