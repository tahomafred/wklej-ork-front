

var globalMethods = {
  methods: {
    openNotify: function(title, message, type){
      this.$notify({
        title: title,
        message: this.$createElement('i', message),
        type: type
      });
    },
    }
  }


module.exports = globalMethods;
