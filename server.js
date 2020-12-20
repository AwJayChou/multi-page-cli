const express = require("express");

const app = express();

app.get("/api/info", (req, res) => {
  res.json({
    name: "webpack",
    info: "webpack-dev-server",
  });
});

app.listen("9092", () => {
  console.log("启动成功");
});
