const express = require('express');
const router = express.Router();

// Path to file excluding .js
const User = require('./models/user.js');
const PolygonScan = require('./models/polygonscan.js');


module.exports = router;

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

app.get("/test/:wallet", (req, res) => {
    res.json({
        user: "John",
        balance: "281402014"
    });
    console.log("requested wallet address: ", req.params.wallet)
});

// POST method route
app.post('/addWallet', async (req, res) => {
    const data = new User({
        walletAddress: req.body.address,
        stakedAmount: req.body.amount,
        endStaking: req.body.staked,
        allocatedRewards: req.body.rewards,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
        console.log("Toegevoegd!");
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
})

app.get('/wallets', async (req, res) => {
    try {
        const data = await PolygonScan.find();
        res.status(200).json(data);
        console.log("Gelukt", data)
    } catch (error) {
        if (res.status == 500) res.status(500).json({
            message: error.message
        });
        if (res.status == 400) res.status(400).json({
            message: error.message
        });

    }
})