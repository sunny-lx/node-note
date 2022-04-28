/**
 * 文件模块的基础操作
 */
const fs = require("fs");
fs.readFile(__dirname + "/grade.txt", "utf8", (err, data) => {
  if (err) {
    console.log("读取文件失败", err.message);
  } else {
    let res = data.split(" ").map((item) => {
      return item.split("=").join(":");
    });
    let a = res.join("\n");
    fs.writeFile(__dirname + "/newGrade.txt", a, (err) => {
      if (err) {
        console.log("写入文件失败", err.message);
      } else {
        console.log("写入文件成功");
      }
    });
  }
});
console.log(module);
