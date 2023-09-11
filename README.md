#Twitter-frontend
a twitter-like frontend project based on React.
**Project Display**
**https://twitter-frontend-mobile.netlify.app/** 
use mobile device to open or press F12 to change to mobile size by PC
##how to start :
npm start

##how to visit
http://localhost:3000/

##things in gitignore will not be submitted to github

##API
request: get post put patch delete
service: const getUser = (params) => get('/user', params).then((res) => {
    return res;
});


##后端的一个 web 服务
使用的是json-server

##Twitter 的前端页面模版


##React 创建五步法
-1.将设计好的UI 划分为组件层级 <div>
-2.用React创建一个静态版本
-3.确定UI state的最小且完整表示 


##style 技术选择
- css 无法编写嵌套
- sass/scss 写简单的嵌套 最终会返回css， 后缀为scss 需要install sass
- css module 不用关系命名空间， 不会出现被覆盖的样式


##工程化的配置信息
-craco.config.js :配置Webpack文件的快捷方式
-jsconfig.js: 他是给vscode使用的js相关的配置文件