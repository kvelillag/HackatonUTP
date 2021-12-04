const express = require("express");
const router = express.Router();
const retosController = require("../controllers/retos.controller");

router.post("/", retosController.create);
router.get("/", retosController.find);
router.get("/:id", retosController.findOne);
router.put("/:id", retosController.update);
router.delete("/:id", retosController.remove);
module.exports = router;
