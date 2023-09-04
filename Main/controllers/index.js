const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./api/home-routes');
const dashboardRoutes = require('./api/dashboard-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
