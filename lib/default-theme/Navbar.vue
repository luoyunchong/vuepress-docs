
<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link :to="$localePath"
                 class="home-link"
                 tag="div">
      <img class="logo"
           v-if="$site.themeConfig.logo"
           :src="$withBase($site.themeConfig.logo)"
           :alt="$siteTitle">
      <span ref="siteName"
            class="site-name"
            v-if="$siteTitle"
            :class="{ 'can-hide': $site.themeConfig.logo }">{{ $siteTitle }}</span>
    </router-link>
    <div class="search"
         :style="{
        'max-width': linksWrapMaxWidth - 300 + 'px'
      }">
      <AlgoliaSearchBox v-if="isAlgoliaSearch"
                        :options="algolia" />
      <SearchBox v-else-if="$site.themeConfig.search !== false" />
    </div>
    <div class="links"
         :style="{
        'max-width': linksWrapMaxWidth - 300 + 'px'
      }">
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue'
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox.vue'
import NavLinks from './NavLinks.vue'
export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },
  data () {
    return {
      linksWrapMaxWidth: null
    }
  },
  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },
  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}
function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">

@import './styles/config.styl'
.navbar
  position relative
  height 80px
  width 100%
  display flex
  align-items center
  box-shadow 0 2px 18px #D4D4D4
  a, span, img
    display inline-block
  .home-link
    line-height 80px
    height 80px
    img
      height 24px
      min-width 110px
      margin-left 3.6vw
      margin-top 28px
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .search
    display inline-block
    margin-left 7.03vw
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 1rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    right 5rem
    .search-box
      flex 0 0 auto
      vertical-align top
    .nav-links
      display flex
      justify-content space-between
      font-size 0.875rem
@media (max-width: $MQNarrow)
  .navbar
    padding-left 4rem
    .can-hide
      display block
    .links
      padding-left 0rem
      right 10px
@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    justify-content space-around
    .logo
      height 32px
      width 70px
      margin-left 0
    .search
      margin-left 40px
    .can-hide
      display none !important
    .links
      padding-left 0rem
      right 0rem
</style>
