const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // This is your MongoDB URI from .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1); // Exit the process if there's an error connecting to DB
  }
};

module.exports = connectDB;
