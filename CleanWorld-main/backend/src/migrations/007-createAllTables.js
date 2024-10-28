const createUserTable = require("../migrations/002-createTableUser");
const createTableFreteiro = require("../migrations/006-createTableFreteiro");
const createTableColetor = require("../migrations/003-createTableColetor");
const createTableDescartante = require("../migrations/004-createTableDescartante");
const createTableCadastroMateriais = require("../migrations/005-createTableCadastroMateriais");

async function createAllTables() {
    await createUserTable();
    await createTableColetor();
    await createTableDescartante();
    await createTableCadastroMateriais();
    await createTableFreteiro();
}

createAllTables().then(() => {
    console.log("Todas as tabelas foram criadas com sucesso!");
}).catch((error) => {
    console.error("Erro ao criar tabelas:", error);
});