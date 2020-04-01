
const tryParseServerMessageEvent = serverMessageEvent => {
    try {
        return JSON.parse(serverMessageEvent.data);
    }
    catch (e) {
        console.log(`Faield to parse server message event ${serverMessageEvent}`);
        return undefined;
    }
}

export default {
    tryParseServerMessageEvent
}