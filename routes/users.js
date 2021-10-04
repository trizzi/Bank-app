const express = require('express');
const router = express.Router();

// route    GET api/users
router.post('/ ', (req, res) => {
	res.send('Registers a user');
});

module.exports = router;
