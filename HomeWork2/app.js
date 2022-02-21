// ДЗ
//
// декілька ендпоінтів зробити
//
// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
//
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

// Практичне:
// Необхідно розширити ваше ДЗ:
//     - додайте ендпоінт signIn який буде приймати email і password і якщо все вірно то редірект на сторінку цього
//
// * хто хоче складніше реалізуйте видалення користувача. Кнопка повинна знаходитись на сторінці з інфою про одного юзера. Після видалення редірект на "/users"

const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let users = [];

app.get('/login', ((req, res) => {
    res.render('login')
}))

app.get('/users', ((req, res) => {
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
}))

app.get('/error', ((req, res) => {
    res.render('error')
}))

app.get('/signError', ((req, res) => {
    res.render('signError')
}))

app.get('/signIn', ((req, res) => {
    res.render('signIn')
}))

app.get('/users/:userId', ((req, res) => {
    const {userId} = req.params;
    const oneUser = users.find(user => user.id === userId)
    res.render('oneUser', {oneUser})
}))

app.post('/login', ((req, res) => {
    if (users.find(user => user.email === req.body.email)) {
        const loginError = 'Account under this email already existed! Choose another email!'
        return res.render('error', {error: loginError, path: '/login', linkTitle: 'Register'})
    }
    users.push({...req.body, id: String(new Date().getTime())})
    return res.redirect('/users')

}))

app.post('/signIn', ((req, res) => {
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
}))

app.post('/users/:userId', ((req, res) => {
    const {userId} = req.params;
    users = users.filter(user => user.id !== userId)
    res.redirect('/users')
}))

app.use((req, res) => {
    res.render('notFound')
})

app.listen(5400, () => {
    console.log('Server is active on PORT 5400')
})

