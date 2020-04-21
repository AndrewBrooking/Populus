// Import database/models
const User = require('../model/User');

module.exports = {

    deleteUser: uuid => {
        return User.findByIdAndDelete(uuid);
    }

};