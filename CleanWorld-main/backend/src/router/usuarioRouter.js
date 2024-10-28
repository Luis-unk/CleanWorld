const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/userController.js");

router.get("/user", usuarioController.getAllUsuario);
router.post("/user", usuarioController.createUser);
router.delete("/usuario/:id", usuarioController.deleteUsuario);
router.put("/usuario/:id", usuarioController.updateUsuario);
router.get("/usuario/:id", usuarioController.getUsuarioById);
router.post("/login", usuarioController.validateLogin);
router.get("/clientes", usuarioController.verifyJWT, usuarioController.rotaOK);


module.exports=router;