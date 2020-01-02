function RemoteLoggerResponse(status) {
  this.status = status || null;
}

RemoteLoggerResponse.prototype.getStatus = () => {
  return this.status;
};

RemoteLoggerResponse.prototype.setStatus = status => {
  this.status = status;
};

module.exports = RemoteLoggerResponse;
