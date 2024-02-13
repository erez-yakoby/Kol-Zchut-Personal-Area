const mongoose = require("mongoose");

const ProcessSchema = new mongoose.Schema(
  {
    processId: {
      type: Number,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Process", ProcessSchema);
