<template>
  <div>
    <h2>Yes yes register</h2>
    <el-row v-loading.body="loading">

    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Register',
  mixins: [require('../mixins.js')],
  data () {
    return {
      pasteId: "",
      loading: false
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
