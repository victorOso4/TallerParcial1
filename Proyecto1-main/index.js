const express = require('express');
const router = require('./routes')
const ProyectoTaller = express();
const port = 3000;
ProyectoTaller.use(express.json());

router(ProyectoTaller);

ProyectoTaller.listen(port, ()=>{
    console.log(`Servidor  en el puerto http://localhost:${port}`);
})

