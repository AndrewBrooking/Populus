// Import database/models
const User = require('../model/User');

module.exports = {

    registerUser: data => {
        return User.create({
            email: data.email,
            username: data.username,
            password: data.password,
            photo: data.photo,
            description: data.description,
            links: data.links,
            joined: Date.now()
        });
    }
    
};