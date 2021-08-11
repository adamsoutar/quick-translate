const REP_CHAR = '{'
const REP_REGEX = /{/g
const TEMPLATE_REGEX = /{{[A-z|0-9]*}}/g

// Turns 'Hello, {{name}}!' into
// ['Hello, {!', ['{{name}}']]
function replaceAndGetTemplates (str) {
  const replaced = str.replace(TEMPLATE_REGEX, REP_CHAR)
  const templates = [...str.matchAll(TEMPLATE_REGEX)].map(m => m[0])
  return [replaced, templates]
}

// Turns ['Konichiwa, {!', ['{{name}}']] into
// 'Konichiwa, {{name}}!'
function placeTemplates (str, templates) {
  const out = []

  const parts = str.split(REP_REGEX)
  for (let i = 0; i < parts.length - 1; i++) {
    out.push(parts[i])
    out.push(templates[i])
  }
  out.push(parts[parts.length - 1])

  return out.join()
}

module.exports = {
  replaceAndGetTemplates, placeTemplates
}
