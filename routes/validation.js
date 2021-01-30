const express = require('express');
const router = express.Router()

const { userValidation } = require('../validation/users/user-validation');

router.post('/', (req, res) => {
    res.send('My rule validation')
})



module.exports = router;