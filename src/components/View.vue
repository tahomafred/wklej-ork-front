<template>
  <div>
    <el-row>
      <el-col :lg="{span: 16, offset: 4}" :sm="{span: 22, offset: 2}"><h2>You are watching paste no. {{ this.$route.params.pasteId }}</h2></el-col>
    </el-row>
    <el-row>
      <el-col :lg="{span: 16, offset: 4}" :sm="{span: 22, offset: 2}" v-loading.body="loading">
        <vue-editor v-model="pasteContent" disabled :editorToolbar="[]"></vue-editor>
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
      password: "",
      passwordChecked: false
    }
  },
  methods: {
    getPaste: function(){
      this.loading = true;
      this.$http.post(this.$http.options.root + this.$route.params.pasteId, {"password" : this.password }).then((response) => {
              // success callback
              this.loading = false;
              this.pasteContent = response.body.content;
          }, (response) => {
              this.loading = false;
              console.log(response);
              if(this.passwordChecked === false){
                this.passwordChecked = true;
                return this.getPassword();
              }
              this.openNotify("404", "Paste not found", "error");
              this.$router.push({path:"/view"});
          })
    },
    getPassword : function(){
      this.$prompt('Is there a password?', 'Password', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputErrorMessage: 'Invalid Password',
        }).then(({value}) => {
          this.password = value;
          this.getPaste();
        },()=> {
          this.openNotify("Error", "Try again", "error");
          this.$router.push({path:"/view"});
        });
    },
    resetData: function() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    pasteIdChanged: function() {
      this.resetData();
      this.getPaste();
    }

  },
  watch: {
    '$route' : function(){ this.pasteIdChanged(); },
    //pasteContent : function(){ this.pasteContent = this.originalContent; }
  },
  created: function(){ this.pasteIdChanged(); }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
