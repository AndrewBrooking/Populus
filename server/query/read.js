// Import database/models
const User = require('../model/User');

module.exports = {

    getPassword: username => {
        return User.findOne({ username }).select('password');
    },

    getUser: uuid => {
        return User.findById(uuid);
    }

};