const RemoteLoggerResponse = require('../shared/remoteloggerresponse');
const CONSTANTS = require('../shared/constants');
const reactRemoteLogger = require('../shared/reactremotelogger.js');

const createRemoteLogger = async (req, res) => {
  reactRemoteLogger.info(req.body.data);
  const infoResponse = new RemoteLoggerResponse(res.translate('remote.logging.successful'));
  res.status(CONSTANTS.HTTP_STATUS_OK).json(infoResponse);
};

module.exports = { createRemoteLogger };
