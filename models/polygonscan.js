const { Timestamp } = require("bson");
const mongoose = require(`mongoose`);

const PolygonScan = new mongoose.Schema(
  {
    HolderAddress: {
      type: String,
    },
    balances: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { collection: "polygonscans" }
);

module.exports = mongoose.model("PolygonScan", PolygonScan);

// feecollector?
