const {looksLikeDefinition, containsLiquid} = require('../util')

test("Normal definition", ()=>{
    const input = "[link definition]: https://www.google.com"

    const matchDefinition = looksLikeDefinition(input);
    const matchLiquid = containsLiquid(input);

    expect(matchDefinition).toMatchSnapshot();
    expect(matchLiquid).toBeFalsy();
})

test("Not a definition link", ()=>{
    const input = "{not a link definition}: Foo"

    const match = looksLikeDefinition(input);

    expect(match).toBeFalsy();
})

test("Jekyll link", ()=>{
    const input = "[jekyll link]: {%link file/location/index.md %}"

    const matchDefinition = looksLikeDefinition(input);
    const matchLiquid = containsLiquid(input);

    expect(matchDefinition).toMatchSnapshot();
    expect(matchLiquid).toMatchSnapshot();
})

test("Jekyll variable", ()=>{
    const input = "[jekyll variable]: {{site.baseurl}}/some/url/location"

    const matchDefinition = looksLikeDefinition(input);
    const matchLiquid = containsLiquid(input);

    expect(matchDefinition).toMatchSnapshot();
    expect(matchLiquid).toMatchSnapshot();
})