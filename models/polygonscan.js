const mongoose = require(`mongoose`);

const PolygonScan = new mongoose.Schema(
  {
    HolderAddress: {
      type: String,
    },
    balances: {
      type: Number,
    },
  },
  { collection: "polygonscans" }
);

module.exports = mongoose.model("PolygonScan", PolygonScan);

// feecollector?
