const registerVehicleService = require("../service/RegisterVehicleService.js");
const jwt = require("jsonwebtoken");
const SECRET = 'Hoisjda9hyg2872ijsadlOOOCleanWorld'

async function getAllRegisterVehicle(req, res) {
  try {
    const rows = await registerVehicleService.getAllRegisterVehicle();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "error getting RegisterVehicles",
      body: error.message,
    });
  }
}

async function createRegisterVehicle(req, res) {
  const { volumeSize, carBrand, carModel, carLicensePlate, maximumWeight } = req.body;

  try {
    await registerVehicleService.createRegisterVehicle(
        volumeSize,
        carBrand,
        carModel,
        carLicensePlate,
        maximumWeight
    );
    res.status(201).json({ message: "Sucess" });
  } catch (error) {
    res.status(500).send({
      message: "Error adding RegisterVehicle! ",
      body: error.message,
    });
  }
}

async function updateRegisterVehicle(req, res) {
  try {
    const { idRegisterVehicle } = req.params;
    const { volumeSize, carBrand, carModel, carLicensePlate, maximumWeight } = req.body;

    await registerVehicleService.updateRegisterVehicle(idRegisterVehicle, volumeSize, carBrand, carModel, carLicensePlate, maximumWeight);
    res.status(201).json({message: "Sucess"});
  } catch (error) {
    res.status(500).send({
      message: "Error updating RegisterVehicle!",
      body: error.message,
    });
  }
}

async function deleteRegisterVehicle(req, res) {
  try {
    const { idRegisterVehicle } = req.params;

    if (!idRegisterVehicle || isNaN(idRegisterVehicle)) {
      return res.status(400).send({ message: "Invalid RegisterVehicle ID!" });
    }
    await registerVehicleService.deleteRegisterVehicle(idRegisterVehicle);
    res.status(200).json({ message: "Sucess" });
  } catch (error) {
    res.status(500).send({
      message: "Error delete RegisterVehicle!",
      body: error.message,
    });
  }
}

      async function getAllRegisterVehicleById(req, res) {
  try {
    const { idRegisterVehicle } = req.params;
    const registerVehicle = await registerVehicleService.getAllRegisterVehicleById(idRegisterVehicle);

    res.status(200).json(registerVehicle);
  } catch (error) {
    res.status(500).send({
      message: "Error getting RegisterVehicle!",
      body: error.message,
    });
  }
}


module.exports = {
  getAllRegisterVehicle,
  createRegisterVehicle,
  updateRegisterVehicle,
  deleteRegisterVehicle,
  getAllRegisterVehicleById
};
