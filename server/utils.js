const { uniqueNamesGenerator, adjectives, animals } = require('unique-names-generator');

const tryParseJson = str => {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.log(`Failed to parse ${str} error: ${e}`)
        return undefined;
    }
}

const getRandomName = () => {
    let name;

    do {
        name = uniqueNamesGenerator({ dictionaries: [adjectives, animals], length: 2, separator: '', style: 'capital' });
    } while (name.length > 15);

    return name;
}

module.exports = {
    tryParseJson,
    getRandomName
}