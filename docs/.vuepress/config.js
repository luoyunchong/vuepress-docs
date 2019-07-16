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
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    displayAllHeaders:true,
    logo: '/left-logo.png',
    nav: [
      { text: 'dotnetcore指南', link: '/dotnetcore/examples/' },
      { text: 'ColorUI指南', link: '/colorui/docs/' },
      {
        text: 'GitHub',
        link: 'https://github.com/luoyunchong'
      }],
    sidebar: {
      '/dotnetcore/': [
        {
          title: 'Examples',
          collapsable: true,
          children: [
            'examples/Console-Hello-World',
            'examples/Console-News-Types',
            'examples/FreeSql-in-asp.net-core-webapi-how-to-use',
            'examples/FreeSql-sample-blog-RESTful-use-automapper',
            'examples/IdentityServer4'
          ]
        }
      ], 
      '/colorui/': [
        {
          title: 'ColorUI文档',
          collapsable: true,
          children: [
            'docs/begin',
          ]
        }
      ], 
    }
  }
}