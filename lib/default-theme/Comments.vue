<template>
    <div class="vcomment" v-if="data.comments === true">
      <div id="vcomments"></div>
    </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
  },

  mounted: function() {
    const Valine = require('valine');
    
    this.window = window
    window.AV = require('leancloud-storage')
    
    new Valine({
      el: '#vcomments' ,
      appId: 'dw2tx8d6vMPTvWUnipnDu6lA-gzGzoHsz',
      appKey: 'yqr27CxNs4sIAXDjWY3zAn7A',
      notify: true,
      verify: false,
      avatar: 'monsterid',
      placeholder: '欢迎留言与我分享您的想法...'
    });
  },
    watch: {
     '$route' (to, from) {
        if(to.path !==  from.path){
          // location.assign(location)
          this.$router.go(0)
          //console.log('我在这里要刷新一下')
        }else{
       
       }
     }
   }, 
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
  width 58%
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
</style>


