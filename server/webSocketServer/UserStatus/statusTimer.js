const statuses = require('./statuses');
const { createOtherUserEditedInfoMessage } = require('../messageCreator');

//This actually should be called statusTimerInitiatorCreator but it's a bit much
const statusTimer = (userContainer, timeToChangeStatus) => {
    const initateStatusTimer = user => {
        let timer;

        const timerWrapper = {
            start: () => {
                timer = setTimeout(() => {
                    userContainer.editUser(user.id, { status: statuses.away });
                    const message = createOtherUserEditedInfoMessage(user.id, { status: statuses.away });

                    userContainer.getAllOpenUsers().forEach(user => {
                        user.connection.send(message);
                    });
                }, timeToChangeStatus);
            },
            stop: () => {
                clearInterval(timer);
            },
            restart: () => {
                timerWrapper.stop();
                timerWrapper.start();
            }
        };

        const statusProperties = {
            status: statuses.online,
            statusTimer: timerWrapper
        };

        return userContainer.editUser(user.id, statusProperties);
    };

    return {
        initateStatusTimer
    };
};

module.exports = statusTimer;
