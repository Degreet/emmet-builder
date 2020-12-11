const singleTags = ["area", "base", "basefont", "bgsound",
  "br", "col", "command", "embed", "hr", "img", "input",
  "isindex", "keygen", "link", "meta", "param", "source",
  "track", "wbr"]

function emmetMake(query) {
  const tokens = query.split("+")

  if (tokens.length == 1) {
    return document.createElement(query)
  } else {
    const els = []
    tokens.forEach(query => els.push(document.createElement(query)))
    return els
  }
}

function emmetBuild(query) {
  let result = ""
  const tokens = query.split("+")
  tokens.forEach(query => {
    result += `<${query}>${singleTags.find(tag => tag == query) ? "" : `</${query}>`}`
  })
  return result
}