const express = require('express'); 
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const routes = require('./routes');

require('dotenv').config();

const app = express(); 
const PORT = 5000; 

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Your Sequelize code goes here
const sequelize = require('./database');

require('./config/passport');

app.use('/', routes);

app.listen(PORT, (error) => {
	if (!error) {
		console.log("Server is Successfully Running, and App is listening on port " + PORT);
	} else {
		console.log("Error occurred, server can't start", error);
	}
});
