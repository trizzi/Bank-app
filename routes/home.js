const express = require('express');
const router = express.Router();

// route    GET api/users
// access  Private
router.get('/ ', (req, res) => {
	res.send('Get all bank details');
});

// route    POST api/users
// access  Private
router.post('/ ', (req, res) => {
	res.send('Add bank details');
});

// route    PUT api/users
// access  Private
router.put('/:id', (req, res) => {
	res.send('Update bank details');
});

// route    DELETE api/users
// access  Private
router.delete('/:id ', (req, res) => {
	res.send('Delete bank details');
});

module.exports = router;
