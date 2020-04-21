## 简介
项目使用vuepress，其可专注于文档构建

- 该项目的文档是基于此项目 [https://github.com/vanoneang/blog](https://github.com/vanoneang/blog)

## 文档源码
[https://github.com/luoyunchong/vuepress-docs](https://github.com/luoyunchong/vuepress-docs)

## vuepress

该采用`vuepress`搭建，内置`md`，可以采用`vue`语法，vue作者出品

- [https://github.com/vuejs/vuepress](https://github.com/vuejs/vuepress)

## 完整文档

- [https://luoyunchong.github.io/vuepress-docs/](https://luoyunchong.github.io/vuepress-docs)


## LinCMS
Lin-CMS 是林间有风团队经过大量项目实践所提炼出的一套内容管理系统框架，前后端分离的完整解决方案。
- [https://github.com/TaleLin/lin-cms-vue](https://github.com/TaleLin/lin-cms-vue)

与本项目的关系:本项目和Lin-CMS的文档的样式效果是一样的，所以文档构建中包含“林间有风团队” 出品，意思是指UI主题来自其团队。

## 如何构建运行
前提
- node.js
- yarn或npm
- vuepress 

最好是安装yarn [https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable](https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable)

## 安装依赖包，开发运行
~~~
PS D:\code\github\vuepress-docs>yarn install
PS D:\code\github\vuepress-docs>yarn dev
~~~

如果不能正常运行，就删除 yarn.lock、node_modules文件夹,再重新执行上面的命令

## 生成发布包
```ps1
PS D:\code\github\vuepress-docs>yarn build 
```

## 发布

发布至github pages 中的gh-pages分支

```ps1
PS D:\code\github\vuepress-docs>.\deploy.ps1
```

.sh 也不懂，关键我本地是windows，不能正常执行，git bash 也许可以 


### package.json介绍
package.json有这些命令
```
  "scripts": {
    "dev": "node bin/vuepress dev docs",
    "build": "node bin/vuepress build docs",
    "lint": "eslint --fix --ext .js,.vue bin/ lib/ test/",
    "deploy-gh": "yarn build && bash scripts/deploy-gh.sh",
    "prepublishOnly": "conventional-changelog -p angular -r 2 -i CHANGELOG.md -s",
    "release": "bash scripts/release.sh",
    "test": "node test/prepare.js && jest --config test/jest.config.js"
  },
```

所以我们可以 yarn dev或yarn build 
其他的，暂时还不会跑

bash无法推送
ssh: connect to host github.com port 22: No route to host
fatal: Could not read from remote repository.
``` 
yarn deploy-gh
```

<RightMenu />