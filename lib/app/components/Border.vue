<template>
  <div class="border">
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
.border
  border 1px solid #DEE2E6
  padding 5px
</style>
