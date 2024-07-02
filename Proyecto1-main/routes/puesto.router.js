const express = require('express');
const router = express.Router();

var puesto = [{}]

router.get('/', (req, res) => {
    res.json(puesto)
})

router.post('/', (req, res) => {
    const body = req.body;
    puesto.push({
        id: req.body.id,
        id_fila: req.body.id_fila,
        numeropuesto: req.body.numeropuesto
    })
    res.json({
        message: 'Puesto Generado',
        data: body.id
    })
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const puesto = puesto.find(s => s.id === id);

    if (!puesto) {

    }

    const UpdatePuesto = ['id', 'id_fila', 'numeropuesto'];

    UpdatePuesto.forEach(campo => {
        if (req.body[campo] !== undefined) {
            puesto[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'Puesto actualizado',
        data: UpdatePuesto
    });
});

router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const puestoIndex = puesto.findIndex(s => s.id === id);

    if (puestoIndex === -1) {
        return res.status(404).json({ message: 'Puesto no encontrado' });
    } else {
        const puestoEliminado = puesto.splice(puestoIndex, 1);

        res.json({
            message: 'Puesto eliminado',
            data: puestoEliminado
        });
    }

});



module.exports = router;