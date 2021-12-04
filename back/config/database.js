const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "accesorios";

const remoteHost = "cluster0.flzps.mongodb.net";
const remoteUser = "HJADMIN";
const remotePass = "hjadmin";
const remoteDb = "retos";

exports.mongoConnect = () => {
  //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  const mongoStringConnection = `mongodb+srv://${remoteUser}:${remotePass}@${remoteHost}/${remoteDb}?retryWrites=true&w=majority`;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on(
    "error",
    console.error.bind(console, "mongodb connection error")
  );
};
