<template>

  <div class="add"  v-loading.body="loading">
    <el-row>
      <el-col :span="16" :offset="1"><h2>Wklej tekst do pola poniżej</h2></el-col>


    </el-row>
    <el-row>
      <el-col :span="16" :offset="1">
        <vue-editor v-model="pasteContent"></vue-editor>
      </el-col>
      <el-col :span="5" :offset="1" class="buttons">
          <el-button type="primary" icon="delete" size="large" v-on:click="clearEditor">Delete</el-button>
          <el-button type="primary" icon="upload" size="large" v-on:click="sendPaste(pasteContent)">Save</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//vue2-editor
import { VueEditor } from 'vue2-editor';
//vue2-editor


export default {
  name: 'add',
  components: {VueEditor},
  mixins: [require('../mixins.js')],
  data () {
    return {
      pasteContent: "",
      loading: false
    }
  },
  methods : {
    clearEditor: function() {
      if(this.checkEditor() == true){
        this.pasteContent = "";
        this.openNotify("Deleted", "The content has been deleted", "info");
      } else {
        this.openNotify("Empty", "Can't delete nothing", "error");
      };

    },
    sendPaste: function(data){
      if(this.checkEditor() == true){
        this.loading = true;
        this.$http.post(this.$http.options.root, {'content' : this.pasteContent }).then((response) => {
                // success callback
                this.loading = false;
                this.openNotify("Paste Added", "Your id is " + response.body.id, "success");
                this.$router.push({path:"/zobacz/" + response.body.id});

            }, (response) => {
                // error callback
                this.loading = false;
                this.openNotify("Paste Not Added", "Error", "error");

            })
      } else { this.openNotify("Paste Not Added", "Paste can't be empty", "error")}

    },

    checkEditor: function(){
      if(this.pasteContent){
        return true;
      } else { return false };
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
