const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    data: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Content", contentSchema);