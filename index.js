const express = require('express');
const servidor = express();

// Criando o EndPoint
servidor.get("/Jhonata", (req, res) => {
})

servidor.listen(3000, () => {
    console.log('Servirdor aberto com sucesso!')
})