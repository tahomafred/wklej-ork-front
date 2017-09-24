<template>
  <div v-loading.body="loading">
    <el-row>
      <el-col :span="16" :offset="4"><h2>You are watching paste no. {{ this.$route.params.pasteId }}</h2></el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <vue-editor v-model="pasteContent" disabled></vue-editor>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//vue2-editor
import { VueEditor } from 'vue2-editor';
//vue2-editor

export default {
  name: 'view',
  components: {VueEditor},
  mixins: [require('../mixins.js')],
  data () {
    return {
      pasteContent: '',
      loading: false,
    }
  },
  methods: {
    getPaste: function(){
      this.loading = true;
      this.$http.get(this.$http.options.root + this.$route.params.pasteId).then((response) => {
              // success callback
              this.loading = false;
              this.pasteContent = response.body.content;
          }, (response) => {
              this.loading = false;
              this.openNotify("404", "Paste not found", "error");
              this.$router.push({path:"/zobacz"});
          })
    },

  },
  watch: {
    '$route' : function(){ this.getPaste(); },
    //pasteContent : function(){ this.pasteContent = this.originalContent; }
  },
  created: function(){ this.getPaste(); }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
