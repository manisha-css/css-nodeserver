const userCotroller = require('../controllers/user.controller');
const userValidator = require('../validators/user.validator');
const authService = require('../shared/auth.service');
const errorHandler = require('../shared/error-handler');

exports.userRoutes = app => {
  app.post('/user/register', userValidator.validateInsert, errorHandler.wrapAsync(userCotroller.createUserAndSendEmail));
  app.post('/user/login', userValidator.validateLogin, errorHandler.wrapAsync(userCotroller.authenticateUser));
  app.post('/user/forgetpassword', userValidator.validateUsername, errorHandler.wrapAsync(userCotroller.forgetPassword));
  app.post('/user/resendlink', userValidator.validateUsername, errorHandler.wrapAsync(userCotroller.resendVerificationCode));
  app.post('/user/changepassword/:id', authService.validateAuthToken, errorHandler.wrapAsync(userCotroller.changePassword));
  app.post('/user/myprofile/:id', authService.validateAuthToken, errorHandler.wrapAsync(userCotroller.updateMyProfile));
};
