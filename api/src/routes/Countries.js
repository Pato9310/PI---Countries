const express = require('express');
const router = express.Router();
const { getCountries, getByCountryId } = require('../controllers/country.controller');

router.get('/', getCountries);
router.get('/:id', getByCountryId);

module.exports = router;