const statuses = require('../UserStatus/statuses');

const handleMessage = (message, user, userContainer) => {
    if (user.status === statuses.away) {
        userContainer.editUser(user.id, { status: statuses.online });
    }

    user.statusTimer.restart();
}

module.exports = handleMessage;
