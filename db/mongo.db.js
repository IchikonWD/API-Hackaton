const Mongoose = require('mongoose');
const colors = require('colors');

const mongoDBConnect = async () => {
  try {
    const conn = await Mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      colors.green(
        `🤖 MongoDB - Connected to: ${conn.connection.host}`.green.bold
      )
    );
  } catch (err) {
    console.log(`🚨 MongoDB - Error: ${err.message.red.bold}`.yellow.bold);
  }
};

module.exports = mongoDBConnect;
