const { Router } =require('express');
const Recipe =require('../models/Recipe')
const router = Router();

// /api/recipe/

router.get('/', async (req, res)=> {
    try {

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong. Try again'})
    }
})

// /api/recipe/add

router.post('/add', async (req, res)=> {
    try {

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong. Try again'})
    }
})

// /api/recipe/update/:id

router.post('/update/:id', async (req, res)=> {
    try {

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong. Try again'})
    }
})

// /api/recipe/version/:id

router.post('/version/:id', async (req, res)=> {
    try {

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong. Try again'})
    }
})

// /api/recipe/:id

router.delete('/:id', async (req, res)=> {
    try {

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong. Try again'})
    }
})

module.exports = router;