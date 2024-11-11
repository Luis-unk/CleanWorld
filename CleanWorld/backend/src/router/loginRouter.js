const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController.js");

router.post("/login", loginController.validateLogin);
router.get("/main", loginController.verifyJWT, loginController.routeConfirmation);

module.exports = router;