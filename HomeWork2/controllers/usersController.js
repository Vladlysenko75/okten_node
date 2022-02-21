let users = require("../db/users");

class UsersController {

    renderUsers(req, res) {
        if (Object.keys(req.query).length) {
            let usersArray = [...users];
            if (req.query.age) {
                usersArray = usersArray.filter(user => user.age === req.query.age);
            }
            if (req.query.city) {
                usersArray = usersArray.filter(user => user.city === req.query.city);
            }
            res.render('users', {users: usersArray})
            return;
        }
        res.render('users', {users})
    }

    getUserById(req, res) {
        const {userId} = req.params;
        const oneUser = users.find(user => user.id === userId)
        res.render('oneUser', {oneUser})
    }

    deleteUser(req, res) {
        const {userId} = req.params;
        users = users.filter(user => user.id !== userId)
        res.redirect('/users')
    }
}

module.exports = new UsersController();