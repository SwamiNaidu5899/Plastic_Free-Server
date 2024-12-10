const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    wasteType: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    location: {
      lat: {
        type: Number,
        default: 17.385044, 
      },
      lng: {
        type: Number,
        default: 78.486671, 
      },
    },
  },
  { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
