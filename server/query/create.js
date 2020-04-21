// Import bcrypt
const bcrypt = require('bcrypt');

// Import database/models
const User = require('../model/User');

// Get # of salt rounds
const { SALT_ROUNDS } = require('../util');

module.exports = {

    registerUser: data => {
        return bcrypt.hash(data.password, SALT_ROUNDS).then(hash => {
            return User.create({
                email: data.email,
                username: data.username,
                password: hash,
                photo: data.photo,
                description: data.description,
                links: data.links,
                joined: Date.now()
            });
        });
    }
    
};