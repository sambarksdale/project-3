const express = require('express');
const router = express.Router();


router.use(require('./user.js'))
router.use(require('./login.js'))


module.exports = router;