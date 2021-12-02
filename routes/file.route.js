const express = require('express');
const router = express.Router();
const { testRoute, getFile } = require('../controllers/file.ctrl');

router.get('/file', testRoute);
router.post('/file', getFile);

module.exports = router;
