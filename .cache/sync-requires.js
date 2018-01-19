// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/viyatb/workspace/owtf.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/viyatb/workspace/owtf.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/viyatb/workspace/owtf.github.io/.cache/json/layout-index.json"),
  "index.json": require("/Users/viyatb/workspace/owtf.github.io/.cache/json/index.json")
}