const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, err => {
      if (err) throw err;
  });
    
    console.log("MongoDB connected")
};

module.exports = connectDB;