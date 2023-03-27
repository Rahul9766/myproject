const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected ");
    } catch (error) {
        console.error("Error while connecting to MongoDB: ", error);
    }
};

module.exports = Connection;

  
  
  
  
  