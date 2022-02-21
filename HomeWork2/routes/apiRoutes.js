const {Router} = require('express');
const loginRouter = require('./loginRoute');
const usersRouter = require('./usersRoute');
const signRouter = require('./signRoute');
const errorsRouter = require('./errorsRoute');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/users', usersRouter);
routes.use('/signIn', signRouter);
routes.use('/error', errorsRouter);
routes.use((req, res) => {
    res.render('notFound')
});


module.exports = routes;