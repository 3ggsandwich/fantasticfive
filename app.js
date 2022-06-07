require('dotenv').config();
require('./controllers/connection');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.get("/test/:wallet", (req, res) => {
  res.json({ user: "John", balance: "281402014" });
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
    res.status(400).json({ message: err.message });
  }
})

app.get('/wallets', async (req, res) => {
   try {
     const data = await PolygonScan.find();
     res.status(200).json(data);
     console.log("Gelukt", data)
   } catch (error) {
     res.status(400).json({ message: error.message });
   }
})

app.get("/getWallet/:address", async (req, res) => {
  try {
    console.log(req.params)
    const data = await PolygonScan.findOne({ walletAddress: req.params.address });
    res.status(200).json(data);
    console.log("Gelukt", data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/update/:address", async (req, res) => {
  const newAmount = req.body.amount

  try {
    console.log(req.params);
    const data = await User.updateOne({ walletAddress: req.params.address, balances: newAmount });
    res.status(200).json(data);
    console.log("Gelukt", data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}: http://localhost:3000/api`)
})