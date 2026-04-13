const express = require('express');
const router = express.Router();
const controller = require('../controllers/patientController');

router.get('/', controller.list);         // GET /api/patients
router.get('/:id', controller.get);       // GET /api/patients/:id
router.post('/', controller.create);      // POST /api/patients
router.put('/:id', controller.update);    // PUT /api/patients/:id
router.delete('/:id', controller.remove); // DELETE /api/patients/:id

module.exports = router;
