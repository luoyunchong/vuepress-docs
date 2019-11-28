
<h1 align="center">
  <a href="http://doc.cms.7yue.pro/">
  <img src="http://doc.cms.7yue.pro/left-logo.png" width="250"/></a>
  <br>
  Lin CMS .NET Core
</h1>
😃 A simple and practical CMS implememted by .NET Core 2.2

## 项目简介

本项目是完全出于个人喜爱，看到Lin-cms有了python,node.js,社区也有人出了[lin-cms-tp5](https://github.com/ChenJinchuang/lin-cms-tp5)的版本

本项目是 Lin CMS 后端的 [.NET Core 2.2](https://docs.microsoft.com/zh-cn/dotnet/core/)的 实现，需要前端？请访问[前端仓库](https://github.com/TaleLin/lin-cms-vue)。官方团队产品了解请访问[TaleLin](https://github.com/TaleLin)

## 什么是 Lin CMS？

 Lin-CMS 是林间有风团队经过大量项目实践所提炼出的一套**内容管理系统框架**。Lin-CMS 可以有效的帮助开发者提高 CMS 的开发效率。

## 线上文档地址(完善中)

[https://luoyunchong.github.io/vuepress-docs/dotnetcore/lin-cms/](https://luoyunchong.github.io/vuepress-docs/dotnetcore/lin-cms/)

## 线上 Demo

[http://face.cms.7yue.pro/#/login](http://face.cms.7yue.pro/#/login)


### Lin CMS 的特点

Lin CMS 的构筑思想是有其自身特点的。下面我们阐述一些 Lin 的主要特点。

#### Lin CMS 是一个前后端分离的 CMS 解决方案

这意味着，Lin 既提供后台的支撑，也有一套对应的前端系统，

首先，传统的网站开发更多的是采用服务端渲染的方式，需用使用一种模板语言在服务端完成页面渲染：比如 Razor等模板技术。

服务端渲染的好处在于可以比较好的支持 SEO，但作为内部使用的 CMS 管理系统，SEO 并不重要。

但一个不可忽视的事实是，服务器渲染的页面到底是由前端开发者来完成，还是由服务器开发者来完成？其实都不太合适。现在已经没有多少前端开发者是了解这些服务端模板语言的，而服务器开发者本身是不太擅长开发页面的。那还是分开吧，前端用最熟悉的 Vue 写 JS 和 CSS，而服务器只关注自己的 API 即可。

其次，单页面应用程序的体验本身就要好于传统网站。

#### 框架本身已内置了 CMS 常用的功能

Lin 已经内置了 CMS 中最为常见的需求：用户管理、权限管理、日志系统等。开发者只需要集中精力开发自己的 CMS 业务即可

更多关于Lin CMS的介绍请访问[Lin CMS线上文档](http://doc.cms.7yue.pro/)

## 所需基础

由于 Lin 采用的是前后端分离的架构，所以你至少需要熟悉 C# 和 Vue。

该项目的Lin 的服务端框架是基于[.NET Core 2.2](https://docs.microsoft.com/zh-cn/dotnet/core/)构建的，所以如果你比较熟悉Mvc、WebAPI、过滤器等概念，或者是 有.NET Framework中Mvc开发经验，相信你一定很容易写出代码。

但前端不同，前端还是需要开发者比较熟悉 Vue 的。


## 讨论交流

### QQ 交流群

QQ 群号：643205479

<img class="QR-img" width="258" height="300" src="http://imglf3.nosdn0.126.net/img/Qk5LWkJVWkF3Nmdyc2xGcUtScEJLOVV1clErY1dJa0FsQ3E1aDZQWlZHZ2dCbSt4WXA1V3dRPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg">

### 微信公众号

微信搜索：林间有风

<img class="QR-img" src="http://imglf6.nosdn0.126.net/img/YUdIR2E3ME5weEdlNThuRmI4TFh3UWhiNmladWVoaTlXUXpicEFPa1F6czFNYkdmcWRIbGRRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg">


## 下个版本开发计划

- [ ] 部署
- [ ] 系统访问日志、错误日志可视化
- [ ] 完善文档
- [ ] 重构核心库结构

<RightMenu />