require('dotenv').config();
require('./controllers/connection');

const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 3000;

app.use(express.json());
app.use('/api', routes)
app.listen(port, () => {
    console.log(`Server running on port ${port}: http://localhost:3000/api`)
})