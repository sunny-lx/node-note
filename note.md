@[toc]

# 初识

## Node.js 定义

Node.js 是一个基于 V8 引擎的 JavaScript 运行时（运行环境）

## Node.js 中的 JS 运行环境

- V8 引擎
- 内置 API
  - fs
  - path
  - http
  - js 内置对象
  - querystring
  - 等等

** 注意：**
浏览器是 JavaScript 的前端运行环境
Node.js 是 JavaScript 的后端运行环境
Node.js 中无法调用 DOM、BOM 等浏览器的 API

## Node.js 作用

基于 Node.js 有很多强大的工具和框架
① Express---Web 应用
② Electron---跨平台的桌面应用
③ restify---快速构建 API 接口
④ 读写操作数据库、创建实用的命令行工具辅助前端开发
⑤ 等等

## 学习路径

- 基础语法
- 内置 API
- express、数据库

## Node.js 执行 JavaScript 代码

1. 在终端进入 js 文件目录
2. node 文件名

# 文件系统模块

- readFile
- writeFile

** 注意：**

- 动态路径拼接
  - \_\_dirname:表示当前文件所处的目录

# path 路径模块

1. 拼接路径:path.join([...path])
2. 查看文件名:path.basename(path[,ext])
3. 查看文件后缀:path.extname(path)

# http 模块

1. 创建基本的 web 服务器

```
// 1.引入http模块
const http = require("http");
// 2.创建服务器
const server = http.createServer();
// 3.监听request事件
server.on("request", (req, res) => {
  // 3.1 req是请求对象，包含与客户端相关的数据与属性
  // 如：req.url:客户端请求的地址；req.method:请求类型
  const url = req.url;
  const method = req.method;
  // 3.2 res是相应对象，包含与服务端相关的数据与属性
  // 如：res.end(str):向客户端发送指定的内容并结束这次请求的处理过程
  res.setHeader('Content-Type','text/html; charset=utf-8')
  res.end('hello')
});
// 4.启动服务器
server.listen(8080, () => {
  console.log("http server running at http://127.0.0.1:8080");
});
```

# 模块化

## 模块化基础

### 模块化定义

解决一个复杂问题时，自顶向下把系统分成若干模块的过程。
对于整个系统来说，模块是课组合、分解和更换的单元。

### 模块化好处

1. 提高了代码的复用性
2. 提高了代码的可维护性
3. 可实现按需加载

### 模块的使用

1. 加载模块：

- require()

### 模块作用域

和函数作用域类似，只能再当前模块内被访问。
防止全局变量的污染。

## Node.js 模块的三大分类

### 内置模块

内置模块是 Node.js 官方提供的。
例如：fs，path，http 等等。

### 自定义模块

用户自己创建的.js 文件。

### 第三方模块

由第三方开发出来的模块，使用前需要先下载。
第三方模块也叫做包。

## 向外共享模块作用域中的成员

### module 对象

在每个.js 自定义模块中都有一个 module 对象，它存储了和当前模块有关的信息.
打印 module 的一个例子

```
Module {
  id: '.',
  path: 'E:\\工作\\node学习',
  exports: {},
  filename: 'E:\\工作\\node学习\\1.js',
  loaded: false,
  children: [],
  paths: [
    'E:\\工作\\node学习\\node_modules',
    'E:\\工作\\node_modules',
    'E:\\node_modules'
  ]
}
```

### module.exports 对象

将模块内的成员共享出去，供外界使用。默认情况为{}
外界用 require()方法导入自定义模块时，得到的就是 module.exports 这个对象。

### exports 对象

exports 指向的就是 module.exports 这个对象。
** 注意：**
将模块导出的对象始终为 module.exports 这个对象。

## Node.js 模块化规范

Node.js 遵循了 CommonJS 模块化规范。
规定：

1. 每个模块内部，module 变量代表当前模块。
2. module 变量是一个对象，他的 exports 属性（即 module.exports）是对外的接口。
3. 加载某个模块，其实就是加载该模块的 module.exports 属性。require()方法用于加载模块。

## npm 管理包

### 包：

即第三方模块。包是基于内置模块封装出来的，提供了更高级、更方便的 API，极大的提高了开发效率。
`https://www.npmjs.com/ 查看包 https://registry.npmjs.org/ 下载包`

### npm

随着 Node.js 安装包一起安装。

- 下载
  `npm install 包名称`
  简写：
  `npm i 包名称`
- 卸载
  `npm uninstall 包名称`

初次安装包出现的文件：

- node_modules：
  存放所有已安装到项目中的包
- package-lock.json：
  记录 node_modules 目录下每个包的下载信息
  这两个文件不要修改操作。npm 会自动管理。

### 包管理配置文件

npm 规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。
package.json：记录与项目有关的一些配置信息。
例如：

- 项目的名称、版本号、描述等等
- 项目中的包
- 哪些包只在开发期间用到
- 哪些包在开发和部署时都要用到
  如何快速创建 package.json：
  `npm init -y`

1. dependencies
   只在项目开发阶段用到的包
2. devDependencies
   在开发和上线都需要用到的包
   `npm i 包名 -D`
   等同于
   `npm install 包名 --save-dev`

### 解决包下载速度慢

淘宝 NPM 镜像服务器

- 检查当前的下载包镜像源
  `npm config get registry`
- 将下载包的镜像源切换为淘宝镜像
  `npm config set registry=https://registry.npm.taobao.org/`
- 检查镜像源是否下载成功
  `npm config get registry`

#### nrm

nrm 是用来切换镜像源的

- 安装
  `npm i nrm -g`
  (-g 安装到全局)
- 查看所有的镜像源
  `nrm ls`
- 将下包的镜像源切换到 taobao 镜像
  `nrm use taobao`

### 包的分类

1. 项目包

- 开发依赖包:
  `npm i 包名`
  在 package.json 的 dependencies 的节点下
- 核心依赖包:
  `npm i 包名 -D`
  在 package.json 的 devDependencies 的节点下

2. 全局包:
   `npm i 包名 -g`
   （一般在 C 盘\用户\用户名\AppData\Roaming\npm\node_modules）

### 规范的包结构

1. 包必须以单独的目录而存在
2. 包的顶级目录下必须包含 package.json 这个包管理配置文件
3. package.json 中必须包含 name(包的名字)、version(版本号)、main(包的入口)

## 开发属于自己的包

一个例子——包含有的功能：

- 格式化日期

```
// 1.导入
const tools = require("./sunny-tools");
// 2.使用
const dt = tools.dateFormat(new Date());
console.log(dt);
```

- 转义 HTML 中的特殊字符

```
// 1.导入
const tools = require("./sunny-tools");
// 2.使用
const htmlStr = '<h1 style="color:red;">你好<span>小黄&nbsp;</span></h1>';
const str = tools.htmlEscape(htmlStr);
console.log(str);
```

- 还原 HTML 中的特殊字符

```
// 1.导入
const tools = require("./sunny-tools");
// 2.使用
const rawHTML = tools.htmlUnEscape(str);
console.log(rawHTML);
```

#### 步骤

1. 初始化包的结构
   ① 新建 sunny-tools 文件
   ② 在 sunny-tools 文件中新建：

   - package.json(包管理配置文件)
   - index.js(包的入口文件)
   - README.md(包的说明文档)

   ③ 在 sunny-tools 文件中新建 src 文件夹，再在 src 中新建：

   - dateFormat(转换时间的模块)
   - htmlEscape(有关 HTML 字符转义模块)

2. 初始化 package.json 文件

```
{
  "name":"sunny-tools",
  "version":"1.0.0",
  "main":"index.js",
  "description": "提供了格式化时间，HTMLEscape的功能",
  "keywords": ["sunny","dataFomat","escape"],
  "license": "ISC"
}
```

3. 初始化 index.js

```
const date = require("./src/dateFormat");
const escape = require("./src/htmlEscape");
module.exports = {
  ...date,
  ...escape,
};
```

4. 编写 dateFormat

```
function dateFormat(dataStr) {
  const dt = new Date(dataStr);
  const y = dt.getFullYear();
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDay());
  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}
// 补零函数
function padZero(n) {
  return n > 9 ? n : "0" + n;
}
module.exports = {
  dateFormat,
};
```

5. 编写 htmlEscape

```
// 转义HTML字符
function htmlEscape(htmlstr) {
  return htmlstr.replace(/<|>|"|&/g, (match) => {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "&":
        return "&amp;";
    }
  });
}

// 还原HTML字符
function htmlUnEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
    switch (match) {
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      case "&quot;":
        return '"';
      case "&amp;":
        return "&";
    }
  });
}
module.exports = {
  htmlEscape,
  htmlUnEscape,
};

```

6. 编写包的说明文档

- 安装方式
- 导入方式
- 格式化时间
- 转义 HTML 特殊字符
- 还原 HTML 字符
- 开源协议

7. 发布

- 注册 npm 帐号
  ① 访问https://www.npmjs.com/
  ②zhuce
  ③ 一定要点击发给邮箱的验证链接
- 在终端登录 npm 帐号
  ** 注意： **
  登录前一定要将镜像切换到官方即 npm

```
//查看所有的镜像源
nrm ls
//将下包的镜像源切换到 npm 镜像
nrm use npm
```

```
npm login
//根据提示输入用户名、密码
```

- 发布包
  切换到发布包的根目录下（包名要唯一）
  `npm publish`

- 删除已发布的包
  `npm unpublish 包名 --force`

## 模块的加载机制

1. 优先从缓存中加载
   模块在第一次加载后会被缓存
   多次调用相同的 require()，不会被执行多次
2. 内置模块的加载机制
   优先级最高
3. 自定义模块加载机制

- 必须指定已`./`或`../`的路径表示符。如果没有则 node 把它当作内置模块或者第三方模块加载。
- 如果省略了文件扩展名，node 按以下顺序尝试加载：
  ① 补全.js
  ② 补全.json
  ③ 补全.node
  ④ 加载失败，报错

4. 第三方模块加载机制
   从当前模块的父目录开始，从/node_modules 加载
   如果没有找到，在上一层父级的/node_modules 中加载
   直到文件系统的根目录
5. 目录作为模块
   ① 在加载的目录下找 package.json 中找 main 属性，作为 require()加载入口
   ② 没有 ①，尝试加载 index.js
   ③ 没有 ①②，终端报错

# Express

## Express 基础

### 定义

基于 Node.js 平台，快速、开放、极简的 Web 开发框架。
通俗：Express 和 Node.js 内置的 http 模块类似，专门用来创建 Web 服务器
