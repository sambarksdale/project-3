const express = require('express');
const router = express.Router();


router.use(require('./user.js'))
router.use(require('./login.js'))
router.use(require('./threads.js'))
router.use(require('./reply.js'))


module.exports = router;