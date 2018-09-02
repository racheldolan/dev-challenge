const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { dbURI, port } = require('./config/environment');

mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => console.log(`Express running on port ${port}`));

module.exports = app;
