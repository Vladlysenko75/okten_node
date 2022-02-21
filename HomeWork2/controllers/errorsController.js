class ErrorsController {

    renderError(req, res) {
        res.render('error')
    }
}

module.exports = new ErrorsController();