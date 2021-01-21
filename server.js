const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/api/v1/transactions',transactions);

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));