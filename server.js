const express = require('express');

const app = express();

app.get('/', (req, res) =>
	res.json({ msg: 'Welcome to Bank App' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/home', require('./routes/home'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Server started on ${PORT}`)
);
