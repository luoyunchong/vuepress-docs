<template>
  <div class="border-wrapper">
    <div class="border-content">
      <div class="slot-content">
        <slot name="content">
        </slot>
      </div>
      <div class="slot-code"
           v-show="isSpread">
        <slot name="code"></slot>
      </div>
      <div class="control"
           @click="changeStatus">
        <img :src=imgSrc />
      </div>
      <div style="width:100%;height:5px;"></div>
    </div>
  </div>
</template>

<script>
import spread from '../icons/spread.png'
import retract from '../icons/retract.png'

export default {
  components: {

  },
  data () {
    return {
      isSpread: false
    }
  },
  computed: {
    imgSrc () {
      return this.isSpread ? retract : spread
    }
  },
  methods: {
    changeStatus () {
      this.isSpread = !this.isSpread
    }
  }
}
</script>

<style scoped lang="stylus">
.border-wrapper
  border 1px solid #DEE2E6
  position relative
  padding 10px
  background #F7F8F9
  .border-content
    border 979797
    box-shadow 2px 2px 30px #C7CCD7
    background #fff
    .slot-content
      display block
      padding 10px
    .slot-code
      display block
      padding-left 10px
      padding-right 10px
    .control
      height 20px
      width 20px
      margin 0 auto
      border 1px solid #DEE2E6
      border-radius 50%
      display flex
      justify-content center
      align-items center
      img
        color #3683D6
        font-weight bold
      &:hover
        border 1px solid #3683D6
</style>
