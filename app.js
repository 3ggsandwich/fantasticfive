require('dotenv').config();
require('./controllers/connection')
const express = require('express');
const app = express();
const mongoose = require(`mongoose`);
const uri = process.env.DB_HOST;
const port = 3000;

// const user = require('../models/user.js');
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Verbonden met DB.')
// }, );

// var conn = mongoose.connection;
// conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.get("/test", (req, res) => {
  res.json({user: "John", balance: "281402014"});
});

// POST method route
app.post('/post', (req, res) => {
  res.send('POST request to the homepage')
})



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})