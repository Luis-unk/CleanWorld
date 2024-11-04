const express = require("express");
const router = express.Router();
const collectorController = require("../controller/collectorController.js");

router.get("/collector", collectorController.getAllCollector);
router.post("/collector", collectorController.createCollector);
/*
router.put("/coletor/:id", coletorController.updatecoletor);
router.delete("/coletor/:id", coletorController.deleteColetor);
router.get("/coletor/:id", coletorController.getColetorById);
*/


module.exports = router;