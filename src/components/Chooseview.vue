<template>
  <div>
    <h2>Please provide ID of your paste</h2>
    <el-row v-loading.body="loading">
      <el-col :span="18" :offset="2"><el-input placeholder="Input ID" v-model="pasteId"></el-input></el-col>
      <el-col :span="2"><el-button type="primary" size="normal" v-on:click="navigateToPaste">Show paste</el-button></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Chooseview',
  mixins: [require('../mixins.js')],
  data () {
    return {
      pasteId: "",
      loading: false
    }
  },
  methods: {
    navigateToPaste: function() {
      this.$router.push({path:"/view/" + this.pasteId});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
