//postcss
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    autoprefixer({
      //autoprefixer 根据我们的配置 自动的帮助我们做兼容
      overrideBrowserslist: ["last 2 versions", ">1%"],
    }),
  ],
};
