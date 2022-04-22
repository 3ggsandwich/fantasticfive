const express = require('express');
const router = express.Router();
const model = require('../models/polygonscan');

module.exports = router;

//Post Method
router.post('/post', (req, res) => {
    res.send('Post works')
})

//Get all entries in db
router.get('/getAll', async (req, res) => {
    try{
        const data = await model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})