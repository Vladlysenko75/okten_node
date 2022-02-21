const {Router} = require('express');

const signController = require('../controllers/signController');
const signInMiddleware = require('../middleware/isUserValid');

const signRouter = Router();

signRouter.get('/', signController.renderSignIn);

signRouter.post('/',signInMiddleware, signController.signInValidation)

module.exports = signRouter;