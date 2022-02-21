function registerData(req, res, next) {
    try {
        console.log(req)
        const {firstName, lastName, email, password, age, city} = req.body;

        if (!firstName || !lastName || !email || !password || !age || !city) {
            throw new Error('All fields are required!')
        }

        next()
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = registerData;