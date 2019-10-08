const autobar = require("./plugins/autobar");

module.exports = ctx => ({
  title: "docs template",
  description: "vuepress template with auto detection of sidebar and nav",
  port: 83,
  plugins: [ [autobar, {pinyinNav: false}] ],
  themeConfig: {
    nav: [{ text: "自动bar配置", link: "https://github.com/boboidream/vuepress-bar" }]
  }
});
