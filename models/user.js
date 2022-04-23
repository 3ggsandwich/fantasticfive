const mongoose = require(`mongoose`);

const Holder = new mongoose.Schema({
  walletAddress: {
    type: String,
    require: true,
  },
  stakedAmount: {
    type: String,
  },
  endStaking: {
    type: String,
  },
  allocatedRewards: {
    type: String,
  },
}, {collection: "users"});

module.exports = mongoose.model('user', Holder);

// feecollector?