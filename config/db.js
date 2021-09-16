const mongoose = require('mongoose');

//an async function because mongoose returns promises 
const connectDB = async () => {
  try {
    //try to connect with the connection string from atlas in env filed
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })

    console.log(`Mongo DB connected: ${conn.connection.host}`);
  } catch (err) {
    //log the error in console
    console.error(err);
    //stop the presses and exit with error >>> which is what the one indicates
    process.exit(1);
  }
}

module.exports = connectDB;