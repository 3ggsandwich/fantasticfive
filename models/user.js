const { Timestamp } = require("bson");
const mongoose = require(`mongoose`);

const Holder = new mongoose.Schema({
    walletAddress: {
        type: String,
        require: true,
    },
    stakedAmount: {
        type: Undefined,
    },
    endStaking: {
        type: Timestamp,
    },
    allocatedRewards: {
        type: Undefined,
    }
});

module.exports = mongoose.model('user', Holder);

// feecollector?