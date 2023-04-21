 const mongoose = require('mongoose')


 //create cigar schema in mongodb usign mongoose.Schema

 const cigarSchema = mongoose.Schema({
    //added reference to user from the user schema to associate cigar entry with user of db
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    
    //schema for cigars
    productid: { 
        type: Number,
        required: [true, 'Please insert unique product id'],
    },
    
    name: { 
        type: String,
        required: [true, 'Please insert product name'],
        },
        
    brand: { 
       type: String,
       required: [true, 'Please insert product name'],
            },
            
    style: { 
        type: String,
        required: [true, 'Please insert product type'],
            },
 
    size: { 
         type: String,
        required: [true, 'Please insert product size'],
            },

    wrapper: { 
         type: String,
        required: [true, 'Please insert wrapper name'],
            },

    binder: { 
         type: String,
         required: [true, 'Please insert binder name'],
            },
            
    filler: { 
         type: String,
         required: [true, 'Please insert product filler'],
                   },

    price: { 
         type: Number,
        required: [true, 'Please insert product name'],
            },

    quantity: { 
        type: String,
        required: [true, 'Please insert product quantity'],
                   },
    },

    {
    timestamps: true,
    },
    {
        strictQuery: true
    }
 )

 module.exports = mongoose.model('Cigar', cigarSchema)