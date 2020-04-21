// Import bcrypt
const bcrypt = require('bcrypt');

// Import database/models
const User = require('../model/User');

// Get # of salt rounds
const { SALT_ROUNDS } = require('../util');

module.exports = {

    // Update user's username
    updateUsername: (_id, username) => {
        return User.findByIdAndUpdate(_id, {
            $set: {
                username
            }
        });
    },

    // Update user's password (if old password matches)
    updatePassword: (_id, oldPassword, newPassword) => {
        return User.findById(_id).then(user => {
            return bcrypt.compare(oldPassword, user.password).then(match => {
                if (match) {
                    return bcrypt.hash(newPassword, SALT_ROUNDS).then(hash => {
                        return User.findByIdAndUpdate(_id, {
                            $set: {
                                password: hash
                            }
                        });
                    });
                }
            });
        });
    },

    // Update user's photo
    updatePhoto: (_id, photo) => {
        return User.findByIdAndUpdate(_id, {
            $set: {
                photo
            }
        });
    },

    // Update user's description
    updateDescription: (_id, description) => {
        return User.findByIdAndUpdate(_id, {
            $set: {
                description
            }
        });
    }

};