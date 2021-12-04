const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdministradorSchema = new Schema({
  usuario: { type: String, required: true, max: 100 },
  pass: { type: String, required: true, max: 128 },
});

module.exports = mongoose.model("administradores", AdministradorSchema);
