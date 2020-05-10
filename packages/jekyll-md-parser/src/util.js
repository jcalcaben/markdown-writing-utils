const looksLikeDefinition = str => {
    const regex = /\[([^\]]+)\]:\s?/g

    return regex.exec(str);

}

const containsLiquid = str => {
    const regex = /\{([^\{][^\}]+[^\}])\}/

    return regex.exec(str);
}

exports.looksLikeDefinition = looksLikeDefinition;
exports.containsLiquid = containsLiquid;

