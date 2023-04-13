const asyncHandler = require('express-async-handler')

const Cigar = require('../models/cigarModel')
const User = require('../models/userModel')

//@desc Get cigars
//@route GET /api/cigars
//@access Private
const getCigars = asyncHandler(async (req, res) => {
    const cigars = await Cigar.find({user: req.user.id})
    // console.log('GET route works')
    res.status(200).json( cigars )
})

//@desc Get cigar by Id
//@route GET /api/cigars/:id
//@access Private
const getCigarById = asyncHandler(async (req, res) => {
    const cigar = await Cigar.findById(req.params.id)
    if(!cigar){
        res.status(400)
        throw new Error('Cigar not found')
    }
    // console.log('GET route works')
    res.status(200).json( cigar )
})

//@desc Get cigar by Quantity
//@route GET /api/cigars/quantity
//@access Private
const getCigarByQuantity = asyncHandler(async (req, res) => {
    const maxQuantity = req.query.quantity || 0
    const cigars = await Cigar.find({ quantity: {$lte: maxQuantity}}).exec()

    if(!cigars.length === 0){
        res.status(400)
        throw new Error(`No cigars found with quantity less than or equal to ${maxQuantity}`)
    }

    if(!cigars.len)

    // console.log('GET route works')
    res.status(200).json( cigars )
})


//@desc Create cigar
//@route POST /api/cigars
//@access Private
const createCigar = asyncHandler(async (req, res) => {
    // console.log(req.body.text)//testing
    if(!req.body.productid, !req.body.name, !req.body.brand, !req.body.type, 
        !req.body.size,!req.body.wrapper, !req.body.binder, !req.body.filler, !req.body.price, !req.body.quantity){
        res.status(400)
        throw new Error('Please add required fields: id, name, brand, type, size, wrapper, filler, price, quantity')
    }

    const cigar = await Cigar.create({
        productid: req.body.productid,
        name: req.body.name,
        brand: req.body.brand,
        type: req.body.type,
        size: req.body.size,
        wrapper: req.body.wrapper,
        binder: req.body.binder,
        filler: req.body.filler,
        price: req.body.price,
        quantity: req.body.quantity,
        user: req.user.id,
    })

    // res.status(200).json({ message: 'Created cigar item'})
    res.status(200).json( cigar )
})

//@desc Update cigar
//@route PUT /api/cigars/:id
//@access Private
const updateCigar = asyncHandler(async (req, res) => {
    // console.log('PUT route works')
    const cigar  = await Cigar.findById(req.params.id)

        if(!cigar){
            res.status(400)
            throw new Error('Cigar not found')
        }

        //Check for user
        if(!req.user) {
            res.status(401)
            throw new Error('User not found')
        }
        // User logged must match cigar user
        if(cigar.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
        }
        const updatedInventory = await Cigar.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
   
    res.status(200).json(updatedInventory)
})

//@desc Delete cigars
//@route DEL /api/cigars/:id
//@access Private
const deleteCigar = asyncHandler(async (req, res) => {
    // console.log('DEL route works')
    const cigar = await Cigar.findById(req.params.id)

    if(!cigar){
        res.status(400)
        throw new Error('Cigar not found')
    }

    
    //Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // User logged must match cigar user
    if(cigar.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await cigar.deleteOne()

    res.status(200).json({ id: req.params.id } )
})


module.exports = {
    getCigars, getCigarById, getCigarByQuantity, createCigar, updateCigar, deleteCigar
} 
