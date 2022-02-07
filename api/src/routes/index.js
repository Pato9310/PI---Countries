//Router import
const { Router } = require('express');
const countryRouter = require('./Countries');
const activityRouter = require('./Activity');

const router = Router();

// Router configuration
router.use('/countries', countryRouter);
router.use('/activity', activityRouter);

module.exports = router;
