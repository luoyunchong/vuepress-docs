import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-77bf85d0947cc",
    path: "/about/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\about\\README.md").then(comp => {
        Vue.component("v-77bf85d0947cc", comp.default)
        next()
      })
    }
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-23cb85a098665",
    path: "/colorui/docs/begin.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\docs\\begin.md").then(comp => {
        Vue.component("v-23cb85a098665", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e1efc4909e571",
    path: "/colorui/docs/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\docs\\index.md").then(comp => {
        Vue.component("v-e1efc4909e571", comp.default)
        next()
      })
    }
  },
  {
    path: "/colorui/docs/index.html",
    redirect: "/colorui/docs/"
  },
  {
    name: "v-b9ed2a0dff1fc",
    path: "/colorui/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\colorui\\index.md").then(comp => {
        Vue.component("v-b9ed2a0dff1fc", comp.default)
        next()
      })
    }
  },
  {
    path: "/colorui/index.html",
    redirect: "/colorui/"
  },
  {
    name: "v-f91226be64588",
    path: "/dotnetcore/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\README.md").then(comp => {
        Vue.component("v-f91226be64588", comp.default)
        next()
      })
    }
  },
  {
    path: "/dotnetcore/index.html",
    redirect: "/dotnetcore/"
  },
  {
    name: "v-caea3acbe96b",
    path: "/dotnetcore/examples/Console-Hello-World.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\Console-Hello-World.md").then(comp => {
        Vue.component("v-caea3acbe96b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7ae71f4a1d6eb",
    path: "/dotnetcore/examples/Console-News-Types.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\Console-News-Types.md").then(comp => {
        Vue.component("v-7ae71f4a1d6eb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-431008db35301",
    path: "/dotnetcore/examples/FreeSql-in-asp.net-core-webapi-how-to-use.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\FreeSql-in-asp.net-core-webapi-how-to-use.md").then(comp => {
        Vue.component("v-431008db35301", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b5af2634b528a",
    path: "/dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\FreeSql-sample-blog-RESTful-use-automapper.md").then(comp => {
        Vue.component("v-b5af2634b528a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d64976407ea8",
    path: "/dotnetcore/examples/IdentityServer4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\IdentityServer4.md").then(comp => {
        Vue.component("v-d64976407ea8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-603d747369324",
    path: "/dotnetcore/examples/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\dotnetcore\\examples\\index.md").then(comp => {
        Vue.component("v-603d747369324", comp.default)
        next()
      })
    }
  },
  {
    path: "/dotnetcore/examples/index.html",
    redirect: "/dotnetcore/examples/"
  },
  {
    name: "v-b194e4a13d28a",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\github\\vuepress-docs\\docs\\index.md").then(comp => {
        Vue.component("v-b194e4a13d28a", comp.default)
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