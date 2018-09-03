const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI, port } = require('./config/environment');
const routes = require('./config/routes');

mongoose.connect(dbURI);

app.use(bodyParser.json());
app.use('/api', routes);

app.use(express.static(`${__dirname}/public`));

app.listen(port, () => console.log(`Express running on port ${port}`));

module.exports = app;
