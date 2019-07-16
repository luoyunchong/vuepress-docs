import Vue from 'vue'
import Router from 'vue-router'
import dataMixin from './dataMixin'
import store from './store'
import { routes } from '@temp/routes'
import { siteData } from '@temp/siteData'
import enhanceApp from '@temp/enhanceApp'
import themeEnhanceApp from '@temp/themeEnhanceApp'

// generated from user config
import('@temp/style.styl')

// built-in components
import Content from './components/Content'
import OutboundLink from './components/OutboundLink.vue'
import ClientOnly from './components/ClientOnly'
import RightMenu from './components/RightMenu'
import Border from './components/Border'
import BorderContent from './components/BorderContent'
import Tag from './components/Tag'
import BorderCenter from './components/BorderCenter'
import Tip from './components/Tip'
import ImgWrapper from './components/ImgWrapper'
// suggest dev server restart on base change
if (module.hot) {
  const prevBase = siteData.base
  module.hot.accept('./.temp/siteData', () => {
    if (siteData.base !== prevBase) {
      window.alert(
        `[vuepress] Site base has changed. ` +
          `Please restart dev server to ensure correct asset paths.`
      )
    }
  })
}

Vue.config.productionTip = false
Vue.use(Router)
// mixin for exposing $site and $page
Vue.mixin(dataMixin(siteData))
// component for rendering markdown content and setting title etc.
Vue.component('Content', Content)
Vue.component('RightMenu', RightMenu)
Vue.component('Border', Border)
Vue.component('BorderContent', BorderContent)
Vue.component('Tag', Tag)
Vue.component('Tip', Tip)
Vue.component('ImgWrapper', ImgWrapper)
Vue.component('BorderCenter', BorderCenter)
Vue.component('OutboundLink', OutboundLink)
Vue.component('Badge', () => import('./components/Badge.vue'))
// component for client-only content
Vue.component('ClientOnly', ClientOnly)
Vue.component('MyButton', () => import('./components/MyButton.vue'))
Vue.component('H2Icon', () => import('./components/H2Icon.vue'))
Vue.component('Blue', () => import('./components/Blue.vue'))

// global helper for adding base path to absolute urls
Vue.prototype.$withBase = function (path) {
  const base = this.$site.base
  if (path.charAt(0) === '/') {
    return base + path.slice(1)
  } else {
    return path
  }
}

export function createApp () {
  const router = new Router({
    base: siteData.base,
    mode: 'history',
    fallback: false,
    routes,
    scrollBehavior: (to, from, saved) => {
      if (saved) {
        return saved
      } else if (to.hash) {
        if (store.disableScrollBehavior) {
          return false
        }
        return {
          selector: to.hash
        }
      } else {
        return { x: 0, y: 0 }
      }
    }
  })

  // redirect /foo to /foo/
  router.beforeEach((to, from, next) => {
    // 不直接跳转到首页的话，左上角的logo会加载不出来
    // if (to.path === '/') {
    //   setTimeout(function () {
    //     router.push({
    //       path: '/start.html'
    //     })
    //   }, 20)
    // }
    if (!/(\/|\.html)$/.test(to.path)) {
      next(
        Object.assign({}, to, {
          path: to.path + '/'
        })
      )
    } else {
      next()
    }
  })

  const options = {}

  themeEnhanceApp({ Vue, options, router, siteData })
  enhanceApp({ Vue, options, router, siteData })

  const app = new Vue(
    Object.assign(options, {
      router,
      render (h) {
        return h('div', { attrs: { id: 'app' }}, [
          h('router-view', { ref: 'layout' })
        ])
      }
    })
  )

  return { app, router }
}
