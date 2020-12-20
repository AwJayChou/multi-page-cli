import axios from "axios";

import counter from "./counter";
import number from "./number";

counter();
number();
if (module.hot) {
  module.hot.accept("./number.js", function () {
    document.body.removeChild(document.getElementById("number"));
    number();
  });
}

// import css from "./index.css";

// var btn = document.createElement("button");
// btn.innerHTML = "新增";
// document.body.appendChild(btn);

// btn.onclick = function () {
//   var div = document.createElement("div");
//   div.innerHTML = "item";
//   document.body.appendChild(div);
// };

//样式问题
// axios.get("/api/info").then((res) => {
//   console.log(res);
// });
// console.log("hello webpack!!!!!!!");

//解决本地开发服务 跨域请求的问题
//约定好接口字段 接口文档

//多页面打包通用方案
