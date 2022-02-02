//Router import
const { Router } = require('express');
const countryRouter = require('./Countries');
const turismRouter = require('./Turism');

const router = Router();

// Router configuration
router.use('/country', countryRouter);
router.use('/turism', turismRouter);

module.exports = router;
