import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-7c082bac77af3",
    path: "/about/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\about\\README.md").then(comp => {
        Vue.component("v-7c082bac77af3", comp.default)
        next()
      })
    }
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-fd58956bda534",
    path: "/colorui/docs/begin.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\docs\\begin.md").then(comp => {
        Vue.component("v-fd58956bda534", comp.default)
        next()
      })
    }
  },
  {
    name: "v-52c3bc6713e44",
    path: "/colorui/docs/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\docs\\index.md").then(comp => {
        Vue.component("v-52c3bc6713e44", comp.default)
        next()
      })
    }
  },
  {
    path: "/colorui/docs/index.html",
    redirect: "/colorui/docs/"
  },
  {
    name: "v-e40867a6aff22",
    path: "/colorui/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\index.md").then(comp => {
        Vue.component("v-e40867a6aff22", comp.default)
        next()
      })
    }
  },
  {
    path: "/colorui/index.html",
    redirect: "/colorui/"
  },
  {
    name: "v-c309482959516",
    path: "/dotnetcore/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\README.md").then(comp => {
        Vue.component("v-c309482959516", comp.default)
        next()
      })
    }
  },
  {
    path: "/dotnetcore/index.html",
    redirect: "/dotnetcore/"
  },
  {
    name: "v-25993481080b1",
    path: "/dotnetcore/examples/Console-Hello-World.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\Console-Hello-World.md").then(comp => {
        Vue.component("v-25993481080b1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28fc546d1270f",
    path: "/dotnetcore/examples/Console-News-Types.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\Console-News-Types.md").then(comp => {
        Vue.component("v-28fc546d1270f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-292b9a3b23de3",
    path: "/dotnetcore/examples/FreeSql-in-asp.net-core-webapi-how-to-use.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\FreeSql-in-asp.net-core-webapi-how-to-use.md").then(comp => {
        Vue.component("v-292b9a3b23de3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-55268bd82e80f",
    path: "/dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\FreeSql-sample-blog-RESTful-use-automapper.md").then(comp => {
        Vue.component("v-55268bd82e80f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b841abc47cc6",
    path: "/dotnetcore/examples/IdentityServer4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\IdentityServer4.md").then(comp => {
        Vue.component("v-8b841abc47cc6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-be9ed91852f07",
    path: "/dotnetcore/examples/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\index.md").then(comp => {
        Vue.component("v-be9ed91852f07", comp.default)
        next()
      })
    }
  },
  {
    path: "/dotnetcore/examples/index.html",
    redirect: "/dotnetcore/examples/"
  },
  {
    name: "v-bdfa7cfdd5694",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\index.md").then(comp => {
        Vue.component("v-bdfa7cfdd5694", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]