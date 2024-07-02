const express = require('express');
const router = express.Router();

var pelicula = [];

router.get('/', (req, res) => {
    res.json(pelicula);
})

router.post('/', (req, res) => {
    const body = req.body;
    pelicula.push({
        id: req.body.id,
        titulo: req.body.titulo,
        genero: req.body.genero,
        duracion: req.body.duracion,
        clasificacion: req.body.clasificacion,
        director: req.body.director
    })
    res.json({
        message: 'Pelicula Guardada'
    });
});

router.get('/', (req, res) => {
    const id = req.params.id;
    const pelicula = pelicula.find(pelicula => pelicula.id == id);
    res.json(pelicula);
});



router.delete('/:id', (req, res) => {
    const { id } = req.params.id;
    const index = pelicula.findIndex(pelicula => pelicula.id == id);
    pelicula.splice(index, 1);
    res.json({ message: 'Pelicula Borrada' });
})

//Endpoint#1
router.get('/:titulo/clasificacion', (req, res) => {
    const titulo = req.params.titulo;
    const hallarId = pelicula.find(pelicula => pelicula.titulo == titulo)
    res.json({
        clasificacion: hallarId.clasificacion
    });
})
//Endpoint#2
router.get('/:clasificacion', (req, res) => {
    const clasificacion = req.params.clasificacion;
    const hallarClasificacion = pelicula.find(pelicula => pelicula.clasificacion == clasificacion)
    res.json(hallarClasificacion.nombre);
})
//Endpoint#3
router.get('/:duracion', (req, res) => {
    const director = req.params.director;
    const hallarId = pelicula.find(pelicula => pelicula.director == director)
    res.json({
        duracion: hallarId.duracion
    });
})
//Endpoint#4
router.get('/:genero/clasificacion', (req, res) => {
    const genero = req.params.genero;
    const hallarId = pelicula.find(pelicula => pelicula.genero == genero)
    res.json({
        clasificacion: hallarId.clasificacion
    });
})
//Endpoint#5
router.get('/:clasificacion/duracion', (req, res) => {
    const clasificacion = req.params.clasificacion;
    const hallarId = pelicula.find(pelicula => pelicula.clasificacion == clasificacion)
    res.json({
        duracion: hallarId.duracion
    });
})

module.exports = router;