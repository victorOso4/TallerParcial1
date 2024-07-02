const express = require('express');

const boletaRouter = require('./boleta.router');
const clienteRouter = require('./cliente.router');
const detalleboletaRouter = require('./detalleboleta.router');
const filaRouter = require('./fila.router');
const peliculaRouter = require('./pelicula.router');
const puestoRouter = require('./puesto.router');
const salaRouter = require('./sala.router');
const taquilleroRouter = require('./taquillero.router');

function router(ProyectoCine) { 
    const router = express.Router();
    ProyectoCine.use('/', router); 
    router.use('/pelicula', peliculaRouter);
    router.use('/cliente', clienteRouter);
    router.use('/boleta', boletaRouter);
    router.use('/detalleboleta', detalleboletaRouter);
    router.use('/fila', filaRouter);
    router.use('/puesto', puestoRouter);
    router.use('/sala', salaRouter);
    router.use('/taquillero', taquilleroRouter);
    return router;
}

module.exports = router;
