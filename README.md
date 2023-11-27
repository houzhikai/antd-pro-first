# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

# git 报错 fatal: unable to access ‘https://github.com/.......‘: OpenSSL SSL_read: Connection was reset, e

git config --global http.sslVerify false

# VSCode 文件保存会自动生成 dist 文件夹解决办法

只需要在“设置”->"搜索"->`compile-hero`,查询出来后,把所有打勾的选项去掉就可以了.

# 取消 http 代理，如果取消 https 代理的话，将 http 改成 https

git config --global --unset http.proxy

# canSeevirtualTableAccess=true 有此参数才能看虚拟表格

# openAPI 可以维护一个接口文档

# swagger

https://pro.ant.design/zh-CN/docs/openapi

# 向伪元素传递值时在 css 使用 attr 方法

```
https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr

 html: <div 自定义='想要的值'>

 css： ::after{
    content: attr(自定义)
 }
```
# yarn outdated
网站地址：https://juejin.cn/s/yarn%20outdated%20packages

您可以在终端中运行以下命令来检查当前项目中哪些包需要更新：`yarn outdated `  

如果您想仅列出特定的包，请在命令中指定包名称，例如：`yarn outdated <package-name> ` 

如果您想更新特定的包，可以运行以下命令：`yarn upgrade <package-name> ` 

如果您想更新所有过时的包，可以运行以下命令：`yarn upgrade ` 