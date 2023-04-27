const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config();

// ROUTE
const SelectorRoute = require('./Routes/V1/selector.route');

// CONNECT MONGOOSE
mongoose
	.connect(
		`mongodb+srv://test:${process.env.DB_PASS}@cluster0.dussar6.mongodb.net/?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log('Database Connected Successfully!'))
	.catch((err) => console.log(err));

// MADIALWARE
app.use(cors());
app.use(express.json());

app.use('/api/v1', SelectorRoute);

app.get('/', (req, res) => {
	res.send('<h1>How are you?</h1>');
});

app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(port, () => {
	console.log('Server is runing', port);
});
