const router = require('express').Router()
const Pokemon = require('../models/Pokemon')

router.get('/', async (req,res) => {
    try {
        const pokemon = await Pokemon.find()
        res.json(pokemon)
    } catch {
        console.log('error fetching all pokemon', error)
        res.send(500).json({ message: 'error fetching all pokemon' })
    }
})

module.exports = router