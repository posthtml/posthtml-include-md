const plugin = require('../')
const posthtml = require('posthtml')

test('should include parsed markdown file', async () => {
  const input = `<html><head><title>Test</title></head><body><markdown src="./__tests__/files/test.md"></body></html>`
  // eslint-disable-next-line
  const output = `<html><head><title>Test</title></head><body><h1 id=\"header-hello\">Hello</h1>
</body></html>`

  const result = await posthtml().use(plugin()).process(input)

  expect(result.html).toBe(output)
})
