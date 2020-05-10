const looksLikeDefinition = str => {
    const regex = /\[([^\]]+)\]:\s?/g

    return regex.exec(str);
}

const containsLiquid = str => {
    const regex = /\{([^\{][^\}]+[^\}])\}/

    return regex.exec(str);
}

const containsVariable = str => {
    const regex = /\{\{([^\}]+)\}\}/

    return regex.exec(str);
}

const containsJekyllLink = str => {
    const regex = /\{%\s?link ([^\}]+)\s?%\}/

    return regex.exec(str);
}

exports.looksLikeDefinition = looksLikeDefinition;
exports.containsLiquid = containsLiquid;
exports.containsVariable = containsVariable;
exports.containsJekyllLink = containsJekyllLink;

