const express = require('express')
const router = express.Router()
const { getCigars, createCigar, updateCigar, deleteCigar } = require('../controllers/cigarController')


router.get('/', getCigars)

router.post('/', createCigar)

router.put('/:id', updateCigar)

router.delete('/:id', deleteCigar)

module.exports = router
 