// 1.导入
const tools = require("./sunny-tools");
// 2.使用

const dt = tools.dateFormat(new Date());
console.log(dt);
console.log("--------------------");

const htmlStr = '<h1 style="color:red;">你好<span>小黄&nbsp;</span></h1>';
const str = tools.htmlEscape(htmlStr);
console.log(str);
console.log("--------------------");

const rawHTML = tools.htmlUnEscape(str);
console.log(rawHTML);
