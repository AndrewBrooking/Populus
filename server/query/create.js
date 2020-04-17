// Import database/models
const db = require('../model/index');

module.exports = {

    registerUser: data => {
        return db.User.create({
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