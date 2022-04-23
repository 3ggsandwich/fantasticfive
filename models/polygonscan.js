const mongoose = require(`mongoose`);

const Holder = new mongoose.Schema({
    HolderAddress: {
        type: String,
        required: true,
    },
    Balance: {
        type: Number,
    }
});

// mongoose.model(COLLECTIE, SCHEMA_NAAM)
module.exports = mongoose.model('polygonscans', Holder);

// feecollector?

// endStaking: {
    //     type: Date,
    // },
    // allocatedRewards: {
    //     type: String,
    // }