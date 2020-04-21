module.exports = {
  base: '/vuepress-docs/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logo.png`
      }
    ],
  ],
  title: 'IGeekFan的文档',
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: true,
    // 文档仓库
    docsRepo: 'https://github.com/luoyunchong/vuepress-docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'vuepress-docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    nav: [
      { text: '简介', link: '/' },
      { text: 'lin-cms-dotnetcore起步', link: '/dotnetcore/lin-cms/' },
      { text: 'ColorUI指南', link: '/colorui/docs/' },
      { text: '关于我', link: 'http://blog.igeekfan.cn/about/' },
      {
        text: 'GitHub',
        link: 'https://github.com/luoyunchong'
      }],
    sidebar: {
      '/dotnetcore/lin-cms/': [{
        title: 'lin-cms-dotnetcore',
        collapsable: true,
        children: [
          'dotnetcore-start.md',
          'vue-start.md',
          'pm-design-modules.md',
        ]
      }, {
        title: '开发者文档',
        collapsable: true,
        children: [
          'dev-start',
          'dependency-injection',
          'dynamic-authorization-in-asp-net-core',
          'spa-github-login'
        ]
      }],
      '/colorui/': [
        {
          title: 'ColorUI文档',
          collapsable: true,
          children: [
            'docs/button',
            'docs/text',
          ]
        }
      ],
    }
  }
}