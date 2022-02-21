const {Router} = require('express');
const signController = require('../controllers/signController');

const signRouter = Router();

signRouter.get('/', signController.renderSignIn);

signRouter.post('/', signController.signInValidation)

module.exports = signRouter;