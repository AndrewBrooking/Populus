// Import database/models
const User = require('../model/User');

module.exports = {

    updateUsername: (uuid, username) => {
        return User.findByIdAndUpdate(uuid, {
            $set: {
                username
            }
        });
    },

    updatePassword: (uuid, password) => {
        return User.findByIdAndUpdate(uuid, {
            $set: {
                password
            }
        })
    },

    updatePhoto: (uuid, photo) => {
        return User.findByIdAndUpdate(uuid, {
            $set: {
                photo
            }
        })
    },

    updateDescription: (uuid, description) => {
        return User.findByIdAndUpdate(uuid, {
            $set: {
                description
            }
        })
    },

    updateLinks: (uuid, links) => {
        return User.findByIdAndUpdate(uuid, {
            $set: {
                links
            }
        })
    },

};