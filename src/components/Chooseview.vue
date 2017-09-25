<template>
  <div>
    <h2>Please provide ID of your paste</h2>
    <el-row v-loading.body="loading">
      <el-col :lg="{span: 18, offset: 2}" :xs="24" :md="20"><el-input placeholder="Input ID" v-model="pasteId"></el-input></el-col>
      <el-col :lg="2" :xs="24" :md="4"><el-button type="primary" size="normal" v-on:click="navigateToPaste">Show paste</el-button></el-col>
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
