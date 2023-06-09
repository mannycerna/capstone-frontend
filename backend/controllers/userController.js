
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc Register new  user 
//@route Post  /api/users/
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body
    
    if(!name || !email || !password || !role){
        res.status(400)
        throw new Error ("Please input name, email, password, and role (admin or user)")
    }

    //Validate user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
            throw new Error('Email already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name, email, password: hashedPassword, role
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc Authenticate  user 
//@route Post  /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    //Check if user email exists
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials  data')
    }
})

//@desc Get user data 
//@route Post  /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

//Generate JWT 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '30d',  } )
}

module.exports = {
    registerUser, loginUser, getMe
} 