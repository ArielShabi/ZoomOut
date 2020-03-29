tryParseJson = str => {
    try {
        return JSON.parse(str);
    } catch (e) {
        return undefined;
    }
}

module.exports = {
    tryParseJson
}