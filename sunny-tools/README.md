## 安装

```
npm install sunny-tools
```

## 导入

```
const tools = require('sunny-tools');
```

## 格式化时间

```
//调用dateFormat对时间格式化
const dt = tools.dateFormat(new Date());
//结果  2022-04-04 20:23:49
console.log(dt);
```

## 转义 HTML 特殊字符

```
//定义HTML字符
const htmlStr = '<h1 style="color:red;">你好<span>小黄&nbsp;</span></h1>';
//调用htmlEscape对字符转义
const str = tools.htmlEscape(htmlStr);
//结果  &lt;h1 style=&quot;color:red;&quot;&gt;你好&lt;span&gt;小黄&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```

## 还原 HTML 特殊字符

```
//调用htmlUnEscape对字符还原
const rawHTML = tools.htmlUnEscape(str);
//结果 <h1 style="color:red;">你好<span>小黄&nbsp;</span></h1>
console.log(rawHTML);
```

## 开源协议

ISC
