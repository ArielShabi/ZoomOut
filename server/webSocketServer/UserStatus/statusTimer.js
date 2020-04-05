const statuses = require('./statuses');

//This actually should be called statusTimerInitiatorCreator but it's a bit much
const statusTimer = (userContaienr, timeToChangeStatus) => {
    const initateStatusTimer = user => {

        let timer;

        const timerWrapper = {
            start: () => {
                timer = setTimeout(() => {
                    userContaienr.editUser(user.id, { status: statuses.away });
                }, timeToChangeStatus);
            },
            restart: () => {
                clearInterval(timer);
                timerWrapper.start();
            },
            stop: () => {
                clearInterval(timer);
            }
        };

        const statusProperties = {
            status: statuses.online,
            Staustimer: timerWrapper
        };

        userContaienr.editUser(user.id, statusProperties);
    }

    return {
        initateStatusTimer
    }
};

module.exports = statusTimer;
