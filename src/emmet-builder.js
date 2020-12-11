const singleTags = ["area", "base", "basefont", "bgsound",
  "br", "col", "command", "embed", "hr", "img", "input",
  "isindex", "keygen", "link", "meta", "param", "source",
  "track", "wbr"]

function emmetMake(query) {
  return document.createElement(query)
}

function emmetBuild(query) {
  return `<${query}>${singleTags.find(tag => tag == query) ? "" : `</${query}>`}`
}