const { createOtherUserEditedInfoMessage } = require('../messageCreator');
const statuses = require('../UserStatus/statuses');

const handleMessage = (message, user, userContainer) => {
    if (user.status === statuses.away) {
        userContainer.editUser(user.id, { status: statuses.online });
        const message = createOtherUserEditedInfoMessage(user.id, { status: statuses.online });

        userContainer.getAllOpenUsers().forEach(user => {
            user.connection.send(message);
        });
    }

    user.statusTimer.restart();
};

module.exports = handleMessage;
