<template>

  <div class="add"  v-loading.body="loading">
    <el-row>
      <el-col :lg="16" :offset="1" :sm="22" :xs="22"><h2>Input the text</h2></el-col>
    </el-row>
    <el-row>
      <el-col :lg="16" :offset="1" :sm="22" :xs="22">
        <vue-editor v-model="pasteContent"></vue-editor>
      </el-col>
      <el-col :lg="{span: 5, offset: 1}" :sm="{span : 10, offset : 7}" :xs="{span: 14, offset: 5}">
          <el-row class="buttons">
            <el-col :lg="12" :sm="12" :xs="12"><el-button type="primary" icon="delete" size="large" v-on:click="clearEditor">Delete</el-button></el-col>
            <el-col :lg="12" :sm="12" :xs="12"><el-button type="primary" icon="upload" size="large" v-on:click="sendPaste(pasteContent)">Save</el-button></el-col>
          </el-row>
          <el-row>
            <p>Private paste? Add a password.</p>
          </el-row>
          <el-row type="flex" align="middle">
            <el-col :span="8"> <el-switch v-model="passwordEnabled"></el-switch> </el-col>
            <el-col :span="14"> <el-input :disabled="!passwordEnabled" v-model="password" icon="edit"></el-input> </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <Counter :text="pasteContent"></Counter>
            </el-col>
          </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//vue2-editor
import { VueEditor } from 'vue2-editor';
//vue2-editor
import Counter from '@/components/counter';

export default {
  name: 'add',
  components: {VueEditor, Counter},
  mixins: [require('../mixins.js')],
  data () {
    return {
      pasteContent: "",
      loading: false,
      password: "",
      passwordEnabled: false
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
        this.$http.post(this.$http.options.root + "paste/", {'content' : this.pasteContent, 'password' : this.password }).then((response) => {
                // success callback
                this.loading = false;
                this.openNotify("Paste Added", "Your id is " + response.body.id, "success");
                this.$router.push({path:"/view/" + response.body.id});

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
    },
    deletePassword: function(){
      if(this.passwordEnabled === false){
        this.password = "";
      }
    }
  },
  watch: {
    passwordEnabled : function(){ this.deletePassword(); }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.buttons{
  margin-top: 20px;
}
</style>
