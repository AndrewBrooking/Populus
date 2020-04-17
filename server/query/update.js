// Import database/models
const db = require('../model/index');

module.exports = {

    updateUsername: (uuid, username) => {
        return db.User.findByIdAndUpdate(uuid, {
            $set: {
                username
            }
        });
    },

    updatePassword: (uuid, password) => {
        return db.User.findByIdAndUpdate(uuid, {
            $set: {
                password
            }
        })
    },

    updatePhoto: (uuid, photo) => {
        return db.User.findByIdAndUpdate(uuid, {
            $set: {
                photo
            }
        })
    },

    updateDescription: (uuid, description) => {
        return db.User.findByIdAndUpdate(uuid, {
            $set: {
                description
            }
        })
    },

    updateLinks: (uuid, links) => {
        return db.User.findByIdAndUpdate(uuid, {
            $set: {
                links
            }
        })
    },

};