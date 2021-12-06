const express = require("express");
const router = express.Router();
const retosController = require("../controllers/retos.controller");

router.get("/", retosController.find);
router.get("/:id", retosController.findOne);
router.post("/:id", retosController.updateVideo);
module.exports = router;
