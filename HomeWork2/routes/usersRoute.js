const {Router} = require('express');

const usersController = require('../controllers/usersController');

const userRouter = Router();

userRouter.get('/', usersController.renderUsers)
userRouter.get('/:userId', usersController.getUserById)

userRouter.post('/:userId', usersController.deleteUser)

module.exports = userRouter;