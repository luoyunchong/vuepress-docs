# igeekfan's documents

## 简介

这个可以专注于文档构建

## 阅读

[在线阅读](https://luoyunchong.github.io/vuepress-docs)

## vuepress

采用`vuepress`搭建，内置`md`，可以采用`vue`语法

你需要安装[https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable](https://yarnpkg.com/lang/zh-hans/docs/install/#windows-stable)

## 安装依赖包，开发运行
~~~
yarn install
yarn dev
~~~

如果不能正常运行，就删除 yarn.lock、node_modules文件夹,再重新执行上面的命令

## 生成发布包
```cmd
yarn build 
```

## 发布至github pages 中的gh-pages分支
```
.\deploy.ps1
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