<script>
export default {
  functional: true, // 使组件无状态 (没有 data ) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染
  props: {
    text: String
  },
  render (h, { props, slots }) {
    return h('span', {
      class: ['blue']
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../default-theme/styles/config.styl'
.blue
  padding 0.25rem 0.5rem
  color #3683d6
  font-size 0.85em
  background #e4f1ff
  border-radius 3px
</style>
