const Reto = require("../models/retos.model");

let response = {
  msg: "",
  exito: false,
};

// Function to create challenge
exports.create = function (req, res) {
  let reto = new Reto({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria: req.body.categoria,
  });

  reto.save(function (err) {
    if (err) {
      (console.log = false),
        (response.exito = false),
        (response.msg = "Error al guardar el reto"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El reto se guardó correctamente"),
      res.json(response);
  });
};

// Function to find all the challenges
exports.find = function (req, res) {
  Reto.find(function (err, reto) {
    res.json(reto);
  });
};

// Function to find one challenge
exports.findOne = function (req, res) {
  Reto.findOne({ _id: req.params.id }, function (err, reto) {
    res.json(reto);
  });
};

// Function to update a challenge
exports.update = function (req, res) {
  let reto = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria: req.body.categoria,
  };
  Reto.findByIdAndUpdate(req.params.id, { $set: reto }, function (err) {
    if (err) {
      (console.error = err),
        (response.exito = false),
        (response.msg = "Error al modificar el reto"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El reto se modificó correctamente"),
      res.json(response);
  });
};

// Function to remove challenge
exports.remove = function (req, res) {
  Reto.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      (console.error = err),
        (response.exito = false),
        (response.msg = "Error al eliminar el reto"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El reto se eliminó correctamente"),
      res.json(response);
  });
};
