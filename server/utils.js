tryParseJson = str => {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.log(`Failed to parse ${str} error: ${e}`)
        return undefined;
    }
}

module.exports = {
    tryParseJson
}