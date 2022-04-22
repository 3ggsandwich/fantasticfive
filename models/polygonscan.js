const { Timestamp, Int32, Decimal128 } = require("bson");
const mongoose = require(`mongoose`);

const Holder = new mongoose.Schema({
    HolderAddress: {
        type: String,
        required: true,
    },
    Balance: {
        type: Decimal128,
    }
});

module.exports = mongoose.model('polygonscan', Holder);

// feecollector?

// endStaking: {
    //     type: Date,
    // },
    // allocatedRewards: {
    //     type: String,
    // }