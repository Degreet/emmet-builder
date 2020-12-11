const singleTags = ["area", "base", "basefont", "bgsound",
  "br", "col", "command", "embed", "hr", "img", "input",
  "isindex", "keygen", "link", "meta", "param", "source",
  "track", "wbr"]

function emmetMake(query) {
  const tree = emmetParse(query)
  return tree.length == 1 ? makeEl(tree[0]) : tree.map(makeEl)
}

function makeEl(struct) {
  const el = document.createElement(struct.tagName)
  struct.children.forEach(child => el.append(makeEl(child)))
  return el
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