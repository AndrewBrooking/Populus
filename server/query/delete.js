// Import database/models
const User = require('../model/User');

module.exports = {

    deleteUser: _id => {
        return User.findByIdAndDelete(_id);
    }

};