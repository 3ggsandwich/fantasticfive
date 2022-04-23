require('dotenv').config();
require('./controllers/connection');
const express = require('express');
const app = express();
const mongoose = require(`mongoose`);
const uri = process.env.DB_URI;
const routes = require('./routes/routes');
const port = 3000;
app.use(express.json());
app.use('/api', routes)

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
    console.log(`Server running on port ${port}: http://localhost:3000/api`)
})