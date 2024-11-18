const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");
const bcrypt = require("bcrypt");


async function getAllRegisterVehicle(){
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query(`SELECT *
    FROM RegisterVehicle`);
    await connection.end();
    return rows;
}

async function createRegisterVehicle(volumeSize, carBrand, carModel, carLicensePlate, maximumWeight){
    const connection = await mysql.createConnection(databaseConfig);

    const insertRegisterVehicle = "INSERT INTO RegisterVehicle(volumeSize, carBrand, carModel, carLicensePlate, maximumWeight) values (?,?,?,?,?)";

    await connection.query(insertRegisterVehicle, [volumeSize, carBrand, carModel, carLicensePlate, maximumWeight])
    await connection.end();
}

async function updateRegisterVehicle(idRegisterVehicle, volumeSize, carBrand, carModel, carLicensePlate, maximumWeight){
   
    const connection = await mysql.createConnection(databaseConfig);

    const updateRegisterVehicle = "UPDATE RegisterVehicle SET volumeSize = ?, carBrand = ?, carModel = ?, carLicensePlate = ?, maximumWeight = ?  WHERE idRegisterVehicle = ?";

    await connection.query(updateRegisterVehicle,[volumeSize, carBrand, carModel, carLicensePlate, maximumWeight, idRegisterVehicle]);

    await connection.end();
}

async function deleteRegisterVehicle (idRegisterVehicle){
    
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM registerVehicle WHERE idRegisterVehicle = ?", [idRegisterVehicle])

    await connection.end();
}

async function getAllRegisterVehicleById(idRegisterVehicle){
    
    const connection = await mysql.createConnection(databaseConfig);

    const [registerVehicle] = await connection.query(`SELECT * FROM
        registerVehicle WHERE idRegisterVehicle = ?`, [idRegisterVehicle]);

    await connection.end();
    
    return registerVehicle;
}


module.exports = {
    getAllRegisterVehicle,
    createRegisterVehicle,
    updateRegisterVehicle,
    deleteRegisterVehicle,
    getAllRegisterVehicleById,
};

