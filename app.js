const express = require('express');
const cors = require('cors');
const app = express();
const product = require('./Routes/product.routes');
const user = require('./Routes/user.routes');

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse url-encoded requests
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: "hello world" });
});

app.use('/product', product);
app.use('/user', user);

module.exports = app;
