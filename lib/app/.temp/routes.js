import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-4a54a637dbaa3",
    path: "/about/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\about\\README.md").then(comp => {
        Vue.component("v-4a54a637dbaa3", comp.default)
        next()
      })
    }
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-483d18b9b62fc",
    path: "/colorui/docs/begin.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\docs\\begin.md").then(comp => {
        Vue.component("v-483d18b9b62fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1cf2f1393ced",
    path: "/colorui/docs/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\docs\\index.md").then(comp => {
        Vue.component("v-1cf2f1393ced", comp.default)
        next()
      })
    }
  },
  {
    path: "/colorui/docs/index.html",
    redirect: "/colorui/docs/"
  },
  {
    name: "v-e458a06f937db",
    path: "/colorui/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\index.md").then(comp => {
        Vue.component("v-e458a06f937db", comp.default)
        next()
      })
    }
  },
  {
    path: "/colorui/index.html",
    redirect: "/colorui/"
  },
  {
    name: "v-6f89a4b794ac6",
    path: "/dotnetcore/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\README.md").then(comp => {
        Vue.component("v-6f89a4b794ac6", comp.default)
        next()
      })
    }
  },
  {
    path: "/dotnetcore/index.html",
    redirect: "/dotnetcore/"
  },
  {
    name: "v-f683bd74277d4",
    path: "/dotnetcore/examples/Console-Hello-World.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\Console-Hello-World.md").then(comp => {
        Vue.component("v-f683bd74277d4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-54a61e69d2c04",
    path: "/dotnetcore/examples/Console-News-Types.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\Console-News-Types.md").then(comp => {
        Vue.component("v-54a61e69d2c04", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fcb25942261af",
    path: "/dotnetcore/examples/FreeSql-in-asp.net-core-webapi-how-to-use.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\FreeSql-in-asp.net-core-webapi-how-to-use.md").then(comp => {
        Vue.component("v-fcb25942261af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b35f19e8c86e3",
    path: "/dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\FreeSql-sample-blog-RESTful-use-automapper.md").then(comp => {
        Vue.component("v-b35f19e8c86e3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-311fcd0117345",
    path: "/dotnetcore/examples/IdentityServer4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\IdentityServer4.md").then(comp => {
        Vue.component("v-311fcd0117345", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ed10b9ec3d278",
    path: "/dotnetcore/examples/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\index.md").then(comp => {
        Vue.component("v-ed10b9ec3d278", comp.default)
        next()
      })
    }
  },
  {
    path: "/dotnetcore/examples/index.html",
    redirect: "/dotnetcore/examples/"
  },
  {
    name: "v-6efe4966bdbd4",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\index.md").then(comp => {
        Vue.component("v-6efe4966bdbd4", comp.default)
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