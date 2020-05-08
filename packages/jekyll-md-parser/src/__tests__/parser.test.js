const unified = require('unified')
const parser = require('remark-parse')
const vfile = require('vfile');

test("Parse normal markdown", () => {
    const input = `
# Header 1

Hello **World**!`

    const file = vfile({
        path: './example.md',
        contents: input
    })

    const tree = unified().use(parser).parse(file);

    expect(tree).toMatchSnapshot();
})