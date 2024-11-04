const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");


async function getAllCollector(){
    
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query(`SELECT
    collector.idCollector,
    collector.nameEnterprise,
    collector.cnpj,
    collector.phone,
    collector.userType,
    collector.email,
    collector.password,
    registerVehicle.idRegisterVehicle,
    registerVehicle.volumeSize,
    registerVehicle.carBrand,
    registerVehicle.carModel,
    registerVehicle.carLicensePlate,
    registerVehicle.maximumWeight
    FROM collector
    LEFT JOIN registerVehicle
    ON collector.idRegisterVehicle = registerVehicle.idRegisterVehicle`);
    await connection.end();
    return rows;
}

async function createCollector(nameEnterprise, cnpj, phone, userType, email, password){
    
    const connection = await mysql.createConnection(databaseConfig);

    const insertcollector = "INSERT INTO collector(nameEnterprise, cnpj, phone ,userType, email, password) values (?,?,?,?,?,?)";

    await connection.query(insertcollector, [nameEnterprise, cnpj, phone,userType, email, password])

    await connection.end();
}

async function updateColetor(id, tipoColetor, peso, id_usuario){
    
    const connection = await mysql.createConnection(databaseConfig);

    const updatecoletor = "UPDATE coletor SET tipoColetor = ?, peso = ?, id_usuario = ? where id = ?";

    await connection.query(updatecoletor,[id, tipoColetor, peso, id_usuario]);

    await connection.end();
}

async function deleteColetor (id){
    
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM coletor WHERE id = ?", [id])

    await connection.end();
}

async function getAllColetorById(id){
    
    const connection = await mysql.createConnection(databaseConfig);

    

    const [coletor] = await connection.query(`select
    id_usuario,
    nome,
    cpf,
    endereco,
    telefone,
    email,
    senhaUsuario,
    tipoColetor, 
    peso
    from coletor
    INNER JOIN USUARIO
    ON coletor.id_usuario = USUARIO.id WHERE coletor.id = ?`, [id]);

    await connection.end();
    
    return coletor;
}


module.exports = {
    getAllCollector,
    createCollector,
    updateColetor,
    deleteColetor,
    getAllColetorById,
};

