const express = require("express");
const router = express.Router();
const registerOrderController = require("../controller/registerOrderController.js");

router.get("/registerOrder", registerOrderController.getAllregisterOrder);
router.post("/registerOrder", registerOrderController.createregisterOrder);
router.put("/registerOrder", registerOrderController.updateregisterOrder);
router.delete("/registerOrder", registerOrderController.deleteregisterOrder);
module.exports = router;