const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RetosSchema = new Schema({
  nombre: { type: String, required: true, max: 60 },
  descripcion: { type: String, required: true, max: 500 },
  categoria: { type: String, required: true, max: 40 },
  imagen: { type: String, required: true, max: 150 },
  videos: [{ type: Object, max: 150 }],
});

module.exports = mongoose.model("retos", RetosSchema);
