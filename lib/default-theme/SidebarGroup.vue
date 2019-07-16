<template>
  <div class="sidebar-group"
       :class="{ first, collapsable }">
    <p class="sidebar-heading"
       :class="{ open }"
       @click="$emit('toggle')">
      <span v-if="item.path">
        <router-link :to="item.path"
                     class="text"
                     v-on:click.native="addActive"
                     ref="router">{{ item.title }}</router-link>
      </span>
      <span v-else>{{ item.title }}</span>
      <span class="arrow"
            v-if="collapsable"
            :class="open ? 'down' : 'right'">
      </span>
    </p>

    <DropdownTransition>
      <ul ref="items"
          class="sidebar-group-items"
          v-if="open || !collapsable">
        <li v-for="child in item.children"
            :key="child.key">
          <SidebarLink :item="child" />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'SidebarGroup',
  props: ['item', 'first', 'open', 'collapsable'],
  components: { SidebarLink, DropdownTransition },
  methods: {
    addActive () {
      console.log('111')
      // this.$refs.router.classList = ['active', 'text']
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
.sidebar-group
  &:not(.first)
    margin-top 0
  .sidebar-group
    padding-left 0.5em
  &:not(.collapsable)
    .sidebar-heading
      cursor auto
      color inherit
.sidebar-heading
  color #45526B
  transition color 0.15s ease
  cursor pointer
  font-size 14px
  padding 0 2.5rem
  margin-top 0
  margin-bottom 10px
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  height 40px
  line-height 40px
  margin-left 5px
  position relative
  font-weight normal
  &.open
    color #3683D6
    background rgba(228, 241, 255, 1)
    border-top-left-radius 25px
    border-bottom-left-radius 25px
  &:hover
    color #3683D6
  .arrow
    position relative
    top -0.12em
    left 0.5em
  &:.open .arrow
    top -0.18em
a.text
  color #314659
  display inline-block
  width 100%
  &:hover
    color $accentColor
  &.router-link-active
    color #3683D6
    font-weight 600
    border-left-color $accentColor
.sidebar-group-items
  transition height 0.1s ease-out
  overflow hidden
</style>
