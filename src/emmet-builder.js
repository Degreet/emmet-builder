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
  return emmetParse(query).map(buildEl).join("")
}

function buildEl(el) {
  return `<${el.tagName}>${singleTags.includes(el.tagName)
    ? "" : `${el.children.map(buildEl).join("")}</${el.tagName}>`}`
}

function emmetParse(query) {
  const tokens = query.split("+")
  const result = []

  tokens.forEach(query => {
    const moreChildren = query.split(">")
    result.push({
      tagName: moreChildren[0],
      children: !singleTags.includes(moreChildren[0])
        && moreChildren.length > 1 ? emmetParse(moreChildren.slice(1).join(">")) : []
    })
  })

  return result
}