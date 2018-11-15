var express = require('express');
var router = express.Router();
const test = require('../models/test');
//Connect Controller
const testController = require('../controllers/testController');

/* GET home page. */
//REST API
router.get('/', testController.getAll);
//GET BY ID
router.get('/:id', testController.findById);
//POST
router.post('/', testController.create);
//DELETE
router.delete('/:id', testController.deleteById);
//UPDATE
router.put('/:id', testController.updateById);

module.exports = router;
