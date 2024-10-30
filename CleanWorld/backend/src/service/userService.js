const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");
const bcrypt = require("bcrypt");


async function getAllUser(){
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query("SELECT * FROM `user`");

    await connection.end();

    return rows;

};

async function createUser(name, cpf, phone, birthDate, userType, email, password){

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    senhaUsuario = passwordHash;

    const connection = await mysql.createConnection(databaseConfig);

    const insertUsuario = "INSERT INTO `user`(name,cpf,phone,birthDate,userType,email,password) values (?, ?, ?, STR_TO_DATE(?, '%d/%m/%Y'), ?, ?, ?)";

    await connection.query(insertUsuario,[name, cpf, phone, birthDate, userType, email, passwordHash])

    await connection.end();
}


async function updateUsuario(id,nome,cpf,endereco,telefone,email,senhaUsuario,tipoCadastro){
    
    const connection = await mysql.createConnection(databaseConfig);  
    
    const updateUsuario = "UPDATE usuario SET nome = ?, cpf = ?, endereco = ?, telefone = ?, email = ? , senhaUsuario = ?, tipoCadastro = ? where id = ?";
    
    await connection.query(updateUsuario,[id, nome,cpf,endereco,telefone,email,senhaUsuario,tipoCadastro])
    
    await connection.end();

};

async function deleteUsuario(id){
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM usuario WHERE id = ?", [id])

    await connection.end();
}

async function getUsuarioById(id){
    const connection = await mysql.createConnection(databaseConfig);

    const [usuario] = await connection.query("SELECT * FROM usuario WHERE id = ?", [id]);

    await connection.end();

    return usuario;
}

async function validateUsuario(email, senhaUsuario) {

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(senhaUsuario, salt);

    const connection = await mysql.createConnection(databaseConfig);
    
    const [usuario] = await connection.query("SELECT * FROM usuario WHERE email = ?", [email]);

    if (bcrypt.compareSync(senhaUsuario, passwordHash) == true && usuario[0].email == email) {

        return usuario;
    };

}

module.exports = {
    getAllUser,
    createUser,
    updateUsuario,
    deleteUsuario,
    getUsuarioById,
    validateUsuario,
};