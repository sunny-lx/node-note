/**
 * 拆分文件
 */
const fs = require("fs");
const path = require("path");

const styleReg = /<style>[\s\S]*<\/style>/;
const scriptReg = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, "./clock/clock.html"), "utf8", (err, data) => {
  if (err) return console.log("读取文件失败", err.message);
  resolveCss(data);
  resolveJS(data);
  resolveHtml(data);
});

function resolveCss(data) {
  const newCss = styleReg
    .exec(data)[0]
    .replace("<style>", "")
    .replace("</style>", "");
  fs.writeFile(path.join(__dirname, "./clock/clock.css"), newCss, (err) => {
    if (err) return console.log("写入CSS失败", err.message);
    console.log("写入CSS成功");
  });
}

function resolveJS(data) {
  const newJS = scriptReg
    .exec(data)[0]
    .replace("<script>", "")
    .replace("</script>", "");
  fs.writeFile(path.join(__dirname, "./clock/clock.js"), newJS, (err) => {
    if (err) return console.log("写入JS失败", err.message);
    console.log("写入JS成功");
  });
}

function resolveHtml(data) {
  const newHtml = data
    .replace(styleReg, '<link rel="stylesheet" href="./clock.css"/>')
    .replace(scriptReg, '<script src="./clock.js"></script>');
  fs.writeFile(path.join(__dirname, "./clock/index.html"), newHtml, (err) => {
    if (err) return console.log("写入HTML失败", err.message);
    console.log("写入HTML成功");
  });
}
