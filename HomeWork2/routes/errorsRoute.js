const {Router} = require('express');
const errorsController = require('../controllers/errorsController');

const errorRouter = Router();

errorRouter.get('/', errorsController.renderError)

module.exports = errorRouter;