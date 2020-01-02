const express = require('express');

const remoteLoggerRoute = express.Router();

const remoteLoggerController = require('../controllers/remotelogger.controller');
const errorHandler = require('../shared/error-handler');

remoteLoggerRoute.post('/', errorHandler.wrapAsync(remoteLoggerController.createRemoteLogger));

module.exports = remoteLoggerRoute;
