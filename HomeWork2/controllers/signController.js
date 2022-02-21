class SignController {

    renderSignIn(req, res) {
        res.render('signIn')
    }

    signInValidation(req, res) {
        res.redirect(`/users/${req.signedUserId}`)
    }
}

module.exports = new SignController();