const users = require("../db/users");

class SignController {

    renderSignIn(req, res) {
        res.render('signIn')
    }

    signInValidation(req, res) {
        function loginValidator(email, password) {
            const signedUser = users.find(user => user.email === email)
            const signError = 'Email or password is incorrect';
            if (!signedUser) {
                return res.render('error', {error: signError, linkTitle: 'Try sign in again', path: '/signIn'})
            }
            if (signedUser.password !== password) {
                return res.render('error', {error: signError, linkTitle: 'Try sign in again', path: '/signIn'})
            }
            return res.redirect(`/users/${signedUser.id}`)
        }

        loginValidator(req.body.email, req.body.password)
    }
}

module.exports = new SignController();