<script>
export default {
  functional: true, // 使组件无状态 (没有 data ) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染
  props: {
    text: String,
    status: {
      type: String,
      default: 'enable'
    }
  },
  render (h, { props }) {
    return h('div', {
      class: ['btn', props.status]
    }, props.text)
  }
}
</script>

<style lang="stylus" scoped>
.btn
  height 30px
  line-height 30px
  background-color #3683d6
  width 70px
  border-radius 5px
  color #ffffff
  text-align center
  font-size 14px
  display inline-block
  margin 5px
  &.disabled
    background-color #edeef0
    color #c4c9d2
  &.white
    background-color #fff
    color #868f9f
    width 68px
    border 1px solid #ccc
</style>
