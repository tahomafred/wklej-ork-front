<template>

  <div>
    <el-card>
      <div>Word count</div>
      <p>{{wordCount}}</p>
      <div>Text length with spaces</div>
      <p>{{textLength}}</p>
      <div>Text length without spaces</div>
      <p>{{textLengthNoSpace}}</p>
    </el-card>

  </div>

</template>

<script>

export default {
  name: 'Counter',
  props: ['text'],
  mixins: [require('../mixins.js')],
  computed: {
    pasteText: function(){
      return this.text.replace(/<(?:.|\n)*?>/gm, '');
    },
    textLength: function(){
      return this.pasteText.length;
    },
    textLengthNoSpace: function(){
      return this.pasteText.replace(/\s+/g,"").length;
    },
    wordCount: function(){
      if(this.pasteText == ""){
        return 0;
      }
      return this.pasteText.trim().split(/\s+/).length;
    }
  },
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
