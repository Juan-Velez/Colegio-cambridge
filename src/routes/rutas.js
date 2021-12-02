const express = require('express');
const router = express.Router();

const empleadoController = require('../controllers/empleadoController');
const areaController = require('../controllers/areaController');
const oficinaController = require('../controllers/oficinaController');
const iareaController = require('../controllers/iareasController');
const iempleadoController = require('../controllers/iempleadosController');


//Rutas Empleado
router.get('/', empleadoController.list);
router.post('/add', empleadoController.save);
router.get('/delete/:id',empleadoController.delete);
router.get('/update/:id', empleadoController.edit);
router.post('/update/:id', empleadoController.update);

//Rutas Area
router.get('/area', areaController.list);
router.post('/area/add', areaController.save);
router.get('/area/delete/:idArea',areaController.delete);
router.get('/area/update/:idArea', areaController.edit);
router.post('/area/update/:idArea', areaController.update);

//Rutas Oficina
router.get('/oficina', oficinaController.list);
router.post('/oficina/add', oficinaController.save);
router.get('/oficina/delete/:idOficina', oficinaController.delete);
router.get('/oficina/update/:idOficina', oficinaController.edit);
router.post('/oficina/update/:idOficina', oficinaController.update);

//Rutas iareas
router.get('/iareas', iareaController.list);

//Rutas iempleados
router.get('/iempleados', iempleadoController.list);


module.exports = router;