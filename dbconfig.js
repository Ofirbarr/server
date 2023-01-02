const { connect } = require("mongoose");

const connectToMongo = async () => {
  try {
    await connect("mongodb://localhost/users");
    console.log("connected to mongo");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectToMongo };
