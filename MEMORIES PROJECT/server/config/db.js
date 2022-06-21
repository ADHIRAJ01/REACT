const mongoose = require('mongoose');
const config = require('config');
const db = config.get('database');


const connectDB = async () => {
    try {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      });
      console.log("DataBase Connected");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;
  
