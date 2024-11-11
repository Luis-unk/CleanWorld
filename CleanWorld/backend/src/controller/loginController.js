const loginService = require("../service/loginService.js");
const jwt = require("jsonwebtoken");
const SECRET = 'Hoisjda9hyg2872ijsadlOOOCleanWorld'
 
async function validateLogin(req, res) {
  try {
    const {email, password} = req.body;
    const validatedUser = await loginService.validateLogin(email, password);

    const idUser = validatedUser[0].idUser
    const token = jwt.sign({ idUser }, SECRET);
    res.status(200).json({ auth: true, token});
  } catch (error) {
    res.status(401).send({
      message: "Error getting user!",
      body: error.message,
    })
  }
}

function verifyJWT (req, res, next) {
    console.log("verificando")
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];
  
    if(!token) {
      console.log("nao autorizou")
      return res.status(401).json({ message: "Não autorizado :(" })
    }
  
    try {
      console.log("chegou aqui")
      jwt.verify(token, SECRET);
      next();
  
    }catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Token não válido"
      })
    }
  
  }
  
  const routeConfirmation = async (req, res) => {
    console.log("testando a rota")
    res.status(200).json({ message: "deu boa" })
  }

  module.exports = {
    validateLogin,
    verifyJWT,
    routeConfirmation
  }

 