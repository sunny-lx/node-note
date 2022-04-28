/**
 * 创建服务器，动态响应url
 */
const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  let fpath = "";
  if (url === "/") {
    fpath = path.join(__dirname, "./clock/index.html");
  } else {
    fpath = path.join(__dirname, "./clock", url);
  }

  fs.readFile(fpath, (err, data) => {
    if (err) return res.end("404 Not found");
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log("http server running at http://172.0.0.1:8080");
});
