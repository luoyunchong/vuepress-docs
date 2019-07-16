# igeekfan's documents

## 简介

这个可以专注于文档构建

## 阅读

[在线阅读](https://luoyunchong.github.io/vuepress-docs)

## vuepress

采用`vuepress`搭建，内置`md`，可以采用`vue`语法

你需要安装[https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable](https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable)

~~~
yarn install
yarn dev
~~~

如果不能正常运行，就删除 yarn.lock、node_modules文件夹,再重新执行上面的命令

发布至github pages 中的gh-pages分支
```
.\deploy.ps1
```

.sh 也不懂，关键我本地是windows，不能正常执行，git bash 也许可以 