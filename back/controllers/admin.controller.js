const usuario = require("../models/admin.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.login = function (req, res, next) {
  let hashedPass = crypto
    .createHash("sha512")
    .update(req.body.pass)
    .digest("hex");

  usuario.findOne(
    { usuario: req.body.usuario, pass: hashedPass },
    function (err, usuario) {
      let response = {
        token: null,
      };
      if (usuario !== null) {
        response.token = jwt.sign(
          {
            id: usuario._id,
            usuario: usuario.usuario,
          },
          "__secret__",
          { expiresIn: "12h" }
        );
      }
      res.json(response);
    }
  );
};
