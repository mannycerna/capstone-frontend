const express = require('express')
const router = express.Router()
const { getCigars, 
        getCigarById, 
        getCigarByQuantity, 
        createCigar, 
        updateCigar, 
        deleteCigar } = require('../controllers/cigarController')

        const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getCigars)

router.get('/:id', protect, getCigarById)

router.get('/quantity', getCigarByQuantity)

router.post('/', protect, createCigar)

router.put('/:id', protect, updateCigar)

router.delete('/:id', protect, deleteCigar)

module.exports = router
 