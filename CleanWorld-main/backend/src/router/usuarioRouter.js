const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController.js");

router.get("/usuario", usuarioController.getAllUsuario);
router.post("/usuario", usuarioController.createUsuario);
router.delete("/usuario/:id", usuarioController.deleteUsuario);
router.put("/usuario/:id", usuarioController.updateUsuario);
router.get("/usuario/:id", usuarioController.getUsuarioById);
router.post("/login", usuarioController.validateLogin);
router.get("/clientes", usuarioController.verifyJWT, usuarioController.rotaOK);


module.exports=router;