const {Router} = require('express');

const loginController = require('../controllers/loginController');
const loginMiddleware = require('../middleware/registerData');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);

loginRouter.post('/', loginMiddleware, loginController.registerNewUser);

module.exports = loginRouter;