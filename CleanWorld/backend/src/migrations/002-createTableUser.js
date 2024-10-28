const mysql = require("mysql2/promise");
const databaseconfig = require("../config/database.js");

async function createUserTable() {
try{

    const connection = await mysql.createConnection(databaseconfig);

    await connection.query(`USE ${databaseconfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS usuario (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cpf VARCHAR(255) NOT NULL unique,
        telefone VARCHAR(255) NOT NULL,
        birthDate DATE NOT NULL,
        provisorio VARCHAR(255),
        email VARCHAR(255) NOT NULL unique,
        senhaUsuario VARCHAR(255) NOT NULL,
        tipoCadastro INT 
    )`);

    await connection.end();
    
    console.log(`Table user created!`);
    }  catch(error) {
        console.log(`Error creating table: ${error}`);
    }
}

createUserTable();
