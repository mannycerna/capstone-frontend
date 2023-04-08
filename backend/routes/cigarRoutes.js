const express = require('express')
const router = express.Router()
const { getCigars, getCigarById, getCigarByQuantity, createCigar, updateCigar, deleteCigar } = require('../controllers/cigarController')


router.get('/', getCigars)

router.get('/:id', getCigarById)

router.get('/quantity', getCigarByQuantity)

router.post('/', createCigar)

router.put('/:id', updateCigar)

router.delete('/:id', deleteCigar)

module.exports = router
 