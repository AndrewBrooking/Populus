// Import database/models
const User = require('../model/User');

module.exports = {

    getPassword: username => {
        return User.findOne({ username }).select('password');
    },

    getUser: _id => {
        return User.findById(_id);
    },

    getUsers: () => {
        return User.find();
    }

};