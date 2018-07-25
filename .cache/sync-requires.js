// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/lw/code/activo/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/home/lw/code/activo/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-home-page-js": preferDefault(require("/home/lw/code/activo/src/templates/home-page.js")),
  "component---src-templates-about-page-js": preferDefault(require("/home/lw/code/activo/src/templates/about-page.js")),
  "component---src-templates-article-page-js": preferDefault(require("/home/lw/code/activo/src/templates/article-page.js")),
  "component---src-templates-contact-page-js": preferDefault(require("/home/lw/code/activo/src/templates/contact-page.js")),
  "component---src-templates-pricing-page-js": preferDefault(require("/home/lw/code/activo/src/templates/pricing-page.js")),
  "component---src-templates-tags-js": preferDefault(require("/home/lw/code/activo/src/templates/tags.js")),
  "component---src-pages-404-js": preferDefault(require("/home/lw/code/activo/src/pages/404.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/home/lw/code/activo/src/pages/blog/index.js")),
  "component---src-pages-tags-index-js": preferDefault(require("/home/lw/code/activo/src/pages/tags/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/lw/code/activo/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/home/lw/code/activo/.cache/json/offline-plugin-app-shell-fallback.json"),
  "index.json": require("/home/lw/code/activo/.cache/json/index.json"),
  "about.json": require("/home/lw/code/activo/.cache/json/about.json"),
  "blog-lorem-ipsum-dolor-situm.json": require("/home/lw/code/activo/.cache/json/blog-lorem-ipsum-dolor-situm.json"),
  "contact.json": require("/home/lw/code/activo/.cache/json/contact.json"),
  "pricing.json": require("/home/lw/code/activo/.cache/json/pricing.json"),
  "tags-lorem.json": require("/home/lw/code/activo/.cache/json/tags-lorem.json"),
  "tags-ipsum.json": require("/home/lw/code/activo/.cache/json/tags-ipsum.json"),
  "404.json": require("/home/lw/code/activo/.cache/json/404.json"),
  "blog.json": require("/home/lw/code/activo/.cache/json/blog.json"),
  "tags.json": require("/home/lw/code/activo/.cache/json/tags.json"),
  "404-html.json": require("/home/lw/code/activo/.cache/json/404-html.json")
}