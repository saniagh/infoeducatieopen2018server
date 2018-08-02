const express = require('express');
const app = express();
const Ddos = require('ddos');
const ddos = new Ddos({ burst: 300, limit: 4000 });
const compression = require('compression');

const dbConfig = require('./db-config');
const bodyParser = require('body-parser');

require('./res/db-models').connect(dbConfig.dbUri);

app.use(bodyParser.urlencoded({ extended: false, limit: '20000kb' }));

const authRoutes = require('./res/handlers/auth');
app.use('/users', authRoutes);

app.listen(8080);
