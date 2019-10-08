const autobar = require("./plugins/autobar");

module.exports = ctx => ({
  title: "docs template",
  description: "vuepress template with auto detection of sidebar and nav",
  port: 83,
  plugins: [ [autobar, {pinyinNav: false}] ],
  themeConfig: {
    nav: [{ text: "Autobar Setting", link: "https://github.com/boboidream/vuepress-bar" }]
  }
});
