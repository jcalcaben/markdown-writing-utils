const { looksLikeDefinition, containsLiquid } = require("./util");

function parser(config) {
  const Parser = this.Parser;
  const blockTokenizers = Parser.prototype.blockTokenizers;
  let blockMethods = Parser.prototype.blockMethods;

  blockTokenizers.liquid = tokenizeLiquid;

  blockMethods.splice(blockMethods.indexOf("definition"), 0, "liquid");
}

const tokenizeLiquid = (eat, value, silent) => {
  var match = /^\[([^\]]+)\]:\s?\{%\s?link ([^\s]+) %\}/.exec(value);

  if (match) {
    if (silent) {
      return true;
    }

    return eat(match[0])({
      type: "definition",
      identifier: match[1],
      label: match[1],
      url: match[2],
      title: match[1],
    });
  }
};

const locateLiquid = (value, fromIndex) => {
  return value.indexOf("[", fromIndex);
};

tokenizeLiquid.notInLink = false;
tokenizeLiquid.locator = locateLiquid;

module.exports = parser;
