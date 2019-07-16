<template>
  <div class="tag">
    <slot></slot>
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
.tag
  color #3683d6
  padding 0.25rem 0.5rem
  margin-left 0.5rem
  margin-right 0.5rem
  font-size 0.85em
  background-color #e4f1ff
  border-radius 0.1875rem
  display inline-block
</style>
