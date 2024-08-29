const express = require("express");
const app = express()
const port = 4500

app.use(express.json())

app.listen(port, ()=>{
    console.log("Servidor funcionando..: ",port);
})
