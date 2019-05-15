const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("this is the root")
})

router.use(require('./user.js'))
router.use(require('./login.js'))


module.exports = router;