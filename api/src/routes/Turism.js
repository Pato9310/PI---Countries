const express = require('express');
const router = express.Router();
const { createActivity } = require('../controllers/turism.controller');

router.post('/', createActivity);

module.exports = router;