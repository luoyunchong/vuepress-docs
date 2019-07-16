<template>
  <div class="border-bottom">
    <div class="text">
      <slot></slot>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
.border-bottom
  display flex
  align-items center
  margin 5px
  .text
    font-weight 600
    font-size 16px
    display inline-block
    white-space nowrap
    padding-right 5px
  .border
    width 100%
    height 1px
    padding-left 5px
    padding-right 5px
    background #E2ECF2
    display inline-block
</style>
