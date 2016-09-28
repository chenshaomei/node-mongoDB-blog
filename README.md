
> A Blog CMS Powered By Node.js

> 一个基于Node.js的博客内容管理器


## Features

* 支持MarkDown语法编辑
* 支持代码高亮

###### 相关技术
* yog2基础框架
* Node.js
* mongoDB (mongoose)
* Express
* marked


### 本地测试
* 确保已有node环境
* 配置mongoDB：[下载](https://www.mongodb.com/download-center?jmp=nav#community)安装，安装完成后执行以下步骤：

** mongodb服务的启用         

1、找到mongodb安装目录bin  按下Shift+鼠标右键 选择 在此处打开命令窗口
2、命令窗体中输入 mongod --dbpath=D:\Mongodb\data 按回车键

注： --dbpath后的值表示数据库文件的存储路径（要手动新建 例如可建在此目录下：D:\Mongodb\data） ，而且后面的路径必须存在否则服务开启失败
注意：这个命令窗体不能关 关闭这个窗口就相当于停止了mongodb服务

** CMD 连接本地mongodb数据库

1、找到mongodb安装目录 按下Shift+鼠标右键 选择 在此处打开命令窗口
2、命令窗体中输入 mongo --host=127.0.0.1 或者 mongo 按回车键

注：--host后的值表示服务器的ip地址

在控制台看到waiting for connections on port 27017表示OK

** 建议可使用mongoVUE作为数据库的可视化工具

克隆远程库
```
git clone git https://github.com/chenshaomei/node-mongoDB-blog.git
```
进入项目目录
```
cd node-mongoDB-blog/yog
```
安装依赖
```
npm install
```
启动
yog目录：
```
yog2 run
```
cf目录：
```
yog2 release --dest debug --watch
```
打开浏览器输入http://localhost:8085/


![image](https://github.com/chenshaomei/node-mongoDB-blog/raw/master/screenImgs/1.png)
![image](https://github.com/chenshaomei/node-mongoDB-blog/raw/master/screenImgs/2.png)
![image](https://github.com/chenshaomei/node-mongoDB-blog/raw/master/screenImgs/3.png)
![image](https://github.com/chenshaomei/node-mongoDB-blog/raw/master/screenImgs/4.png)
