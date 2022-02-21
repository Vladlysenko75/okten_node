const users = require("../db/users");

function isUserValid(req, res, next) {
    try {
        const {email, password} = req.body;
        const signedUser = users.find(user => user.email === email);
        const signError = 'Email or password is incorrect';

        if (!email || !password) {
            throw new Error('Login or password is not provided!');
        }

        if (!signedUser) {
            return res.render('error', {error: signError, linkTitle: 'Try sign in again', path: '/signIn'})
        }

        if (signedUser.password !== password) {
            return res.render('error', {error: signError, linkTitle: 'Try sign in again', path: '/signIn'})
        }

        req.signedUserId = signedUser.id;

        next()
    } catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = isUserValid;