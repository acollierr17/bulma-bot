const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Discord } = require('./routers');
require('dotenv-flow').config();

app.logger = require('../utils/logger');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', Discord);

app.get('/', (req, res, next) => {
    res.status(404).json({ 
        status: res.statusCode
     });
});

app.get('/api', (req, res, next) => {
    res.status(404).json({ 
        status: res.statusCode
     });
});

app.get('/api/v1', (req, res, next) => {
    res.json({ 
        status: res.statusCode,
        message: 'Welcome to the Bulma Bot API!'
     });
});

app.listen(process.env.PORT, (err) => {
    if (err) return app.logger.error(err.stack);
    app.logger.log(`Listening on port ${process.env.PORT}`, 'ready');
});

process.on('unhandledRejection', error => {
    if (process.env.NODE_ENV === 'development') return app.logger.log(`Unhandled Rejection: ${error.stack}`);
    app.logger.log(`Unhandled Rejection: ${error}`);
});