const express = require('express');
const router = express.Router();


router.use(require('./user.js'))
router.use(require('./login.js'))
router.use(require('./boards.js'))


module.exports = router;