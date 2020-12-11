function emmetMake(query) {
  return document.createElement(query)
}

function emmetBuild(query) {
  return `
    <${query}></${query}>
  `
}