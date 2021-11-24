const express = require('express');
const router = express.Router();

const empleadoController = require('../controllers/empleadoController');
const areaController = require('../controllers/areaController');


//Rutas empleado
router.get('/', empleadoController.list);
router.post('/add', empleadoController.save);
router.get('/delete/:id',empleadoController.delete);
router.get('/update/:id', empleadoController.edit);
router.post('/update/:id', empleadoController.update);

//Rutas oficina
router.get('/area', areaController.list);
router.post('/area/add', areaController.save);
router.get('/area/delete/:idArea',areaController.delete);
router.get('/area/update/:idArea', areaController.edit);
router.post('/area/update/:idArea', areaController.update);



module.exports = router;