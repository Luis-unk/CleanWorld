const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllRegisterOrder(){
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query("SELECT * FROM RegisterOrder");

    await connection.end();

    return rows;
}

async function createRegisterOrder(descricaoMaterial, qtdVolumes, dataColeta, tamanhoVolume, horarioColeta){
    const connection = await mysql.createConnection(databaseConfig);

    const insertRegisterOrder = "INSERT INTO RegisterOrder(descricaoMaterial, qtdVolumes, dataColeta, tamanhoVolume, horarioColeta) VALUES (?,?,?,?,?)";

    await connection.query(insertRegisterOrder, [descricaoMaterial, qtdVolumes, dataColeta, tamanhoVolume, horarioColeta])

    await connection.end();
}

async function updateRegisterOrder(id, descricaoMaterial, qtdVolumes, dataColeta, tamanhoVolume, horarioColeta){
    const connection = await mysql.createConnection(databaseConfig);
    
    const updateRegisterOrder = "UPDATE RegisterOrder SET id = ?, descricaoMaterial = ?, qtdVolumes = ?, dataColeta = ?, tamanhoVolume = ?, horarioColeta = WHERE id = ?";

    await connection.query(updateRegisterOrder,[id, descricaoMaterial, qtdVolumes, dataColeta, tamanhoVolume, horarioColeta]);

    await connection.end();
}

async function deleteRegisterOrder (id){
    const connection = mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM RegisterOrder WHERE id = ?", [id])

    await connection.end();
}

module.exports = {
    getAllRegisterOrder,
    createRegisterOrder,
    updateRegisterOrder,
    deleteRegisterOrder,
};

