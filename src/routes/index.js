const express = require('express');
const router = express.Router();

router.use('/patients', require('./patients'));
router.use('/medics', require('./medics'));
router.use('/appointments', require('./appointments'));

router.get('/', (req, res) => res.json({ ok: true, message: 'Clinic API' }));

module.exports = router;
