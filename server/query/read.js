// Import database/models
const db = require('../model/index');

module.exports = {

    getPassword: username => {
        return db.User.findOne({ username }).select('password');
    },

    getUser: uuid => {
        return db.User.findById(uuid);
    }

};