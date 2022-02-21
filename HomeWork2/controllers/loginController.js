const users = require("../db/users");

class LoginController {

    renderLogin(req, res) {
        res.render('login')
    }

    registerNewUser(req, res) {
        if (users.find(user => user.email === req.body.email)) {
            const loginError = 'Account under this email already existed! Choose another email!'
            return res.render('error', {error: loginError, path: '/login', linkTitle: 'Register'})
        }
        users.push({...req.body, id: String(new Date().getTime())})
        return res.redirect('/users')
    }
}

module.exports = new LoginController();