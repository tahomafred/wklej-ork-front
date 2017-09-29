<template>
  <el-popover
    ref="notLogged"
    placement="top"
    width="160"
    v-model="visible2">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible2 = false">cancel</el-button>
      <el-button type="primary" size="mini" @click="visible2 = false">confirm</el-button>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: 'userPopovers',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
