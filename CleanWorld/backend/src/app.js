const express = require("express");
const bodyParser = require("body-parser");
const usuarioRouter = require("./router/usuarioRouter");
const coletorRouter = require("./router/coletorRouter");
const descartanteRouter = require("./router/descartanteRouter");
const cors = require("cors");


const port = 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json("application/json")) 

app.get("/", (req, res) => {
    res.send("<h1> CleanWorld <h1>");
})

app.use("/api", usuarioRouter);

app.use("/api", coletorRouter);

app.use("/api", descartanteRouter);


app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});
