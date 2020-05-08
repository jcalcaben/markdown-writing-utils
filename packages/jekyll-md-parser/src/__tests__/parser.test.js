const unified = require('unified')
const parser = require('remark-parse')
const vfile = require('vfile');

const markdownParser = require('../parser');

test("Parse normal markdown", () => {
    const input = `
# Header 1

Hello **World**!`

    const file = vfile({
        path: './example.md',
        contents: input
    })

    const tree = unified().use(parser).use(markdownParser).parse(file);

    expect(tree).toMatchSnapshot();
})

test("Parse markdown with liquid link", () => {
    const input = `
# Header 1

This is a [reference link][] example.

This is [another reference link][] example.

[reference link]: {%link link/to/a/markdown/file.md %}
[another reference link]: {% link link/to/another/file.md %}`

    const file = vfile({
        path: './example.md',
        contents: input
    })

    const tree = unified().use(parser).use(markdownParser).parse(file);

    expect(tree).toMatchSnapshot();
})