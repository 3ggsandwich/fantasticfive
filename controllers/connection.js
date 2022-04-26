require('dotenv').config()
const mongoose = require(`mongoose`);
const uri = process.env.DB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((obj) => {
    console.log(`Connected to mongo`);
  })
  .catch((err) => {
    console.log(err);
  });
