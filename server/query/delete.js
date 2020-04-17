// Import database/models
const db = require('../model/index');

module.exports = {

    deleteUser: uuid => {
        return db.User.findByIdAndDelete(uuid);
    }

};