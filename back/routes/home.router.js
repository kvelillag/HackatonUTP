const express = require("express");
const router = express.Router();
const retosController = require("../controllers/retos.controller");

router.get("/", retosController.find);
module.exports = router;
