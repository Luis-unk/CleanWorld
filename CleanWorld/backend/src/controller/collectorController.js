const collectorService = require('../service/collectorService.js');

async function getAllCollector(req, res){
    try{
        const rows = await collectorService.getAllCollector();
        res.status(200).json(rows);
    }catch(error){
        res.status(500).send({
            message: "Error getting coletor",
            body: error.message,
        });
    }
}

async function createCollector(req, res){
    const{nameEnterprise, cnpj, phone,userType, email, password} = req.body;
    try{
        await collectorService.createCollector(nameEnterprise, cnpj, phone,userType, email, password);
        res.status(201).json({message:"Sucess"});
    }catch(error){
        res.status(500).send({
            message:"Error adding user!",
            error: error.message
        });
    }
}

async function updatecoletor(req, res){
    try{
        const {id}=req.params;
        const {tipoColetor, peso, id_usuario} = req.params;
        await coletorService.updateColetor(id, tipoColetor, peso, id_usuario);
        res.status(201).json({message: "Sucess"});    
    }catch(error){
        res.status(500).send({
            message: "Error updating coletor",
            body: error.message,
        })
    }
}

async function deleteColetor(req, res){
    try{
        const {id} = req.params;

        await coletorService.deleteColetor(id);

        res.status(201).json({ message: "Sucess" });
    }catch(error){
        res.status(500).send({
            message: "Error updating coletor",
            body: error.message,
        })
    }
}

async function getColetorById(req, res){
    try{
        const {id} = req.params;

        const coletor = await coletorService.getAllColetorById(id);

        res.status(200).json(coletor);
    }catch(error){
        res.status(500).send({
            message: "Error updating coletor",
            body: error.message,
        })
    }
}


module.exports = {
    getAllCollector,
    createCollector,
    updatecoletor,
    deleteColetor,
    getColetorById,
}