const express = require('express');
const contactusRoutes = require('./contactus.routes');
const userRoutes = require('./user.routes');
const helpIntroRoutes = require('./helpintro.routes');
const remoteLoggerRoutes = require('./remotelogger.routes');
const InfoResponse = require('../shared/inforesponse');

const apiRouter = express.Router();

apiRouter.get('/healthcheck', (req, res) => {
  const greeting = 'healthcheck.ok';
  const infoResponse = new InfoResponse(res.translate(greeting));
  res.json(infoResponse);
});

apiRouter.use('/contactus', contactusRoutes);
apiRouter.use('/user', userRoutes);
apiRouter.use('/helpintro', helpIntroRoutes);
apiRouter.use('/remoteLogger', remoteLoggerRoutes);

module.exports = apiRouter;
