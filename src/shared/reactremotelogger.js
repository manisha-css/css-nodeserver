const winston = require('winston');

// instantiate a new Winston Logger with the settings defined above
const reactRemoteLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.json(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  level: 'info',
  maxsize: 5242880,
  maxFiles: 5,
  transports: [new winston.transports.File({ filename: 'logs/react-remote-log.log' })]
});

// create a stream object with a 'write' function that will be used by `morgan`
reactRemoteLogger.stream = {
  write(message) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    reactRemoteLogger.info(message);
  }
};

module.exports = reactRemoteLogger;
