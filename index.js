const fs = require('fs')
const path = require('path')

var marked = require('marked')
const parser = require('posthtml-parser')

module.exports = function (config = {}) {
  const { root = './', encoding = 'utf-8' } = config

  marked.setOptions(Object.assign({
    headerPrefix: 'header-',
    gfm: true,
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value
    }
  }, config))

  return function includeMD (tree) {
    tree.match({ tag: 'markdown' }, function (node) {
      let src = (node.attrs && node.attrs.src) || false
      let content = ''

      if (src) {
        src = path.resolve(root, src)
        const parsedContent = marked(fs.readFileSync(src, encoding))
        content = parser(parsedContent)

        if (tree.messages) {
          tree.messages.push({
            type: 'dependency',
            file: src
          })
        }
      }

      return {
        tag: false,
        content: content
      }
    })
    return tree
  }
}
