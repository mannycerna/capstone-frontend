const mongoose = require('mongoose')

//create user schema in mongodb usign mongoose.Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },

    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'password is required'],
    },

    roles: {
        type: String,
        required: [true, 'please assign a roll' ],
    },

}, 
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)