<template>
  <div class="tip">
    <img :src=imgSrc />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import tip from '../icons/tip.png'
export default {
  components: {

  },
  data () {
    return {
      imgSrc: tip
    }
  }
}
</script>

<style scoped lang="stylus">
.tip
  background #eff7ff
  position relative
  padding-top 15px
  padding-left 10px
  padding-right 5px
  padding-bottom 5px
  img
    position absolute
    top -10px
    left 40px
</style>
