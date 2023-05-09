// imports
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config.json');

// jwt
const maxAge = 60 * 60 * 24 * 3;
const createToken = function(id) {
    return jwt.sign({ id }, jwtSecret), {
        expiresIn: maxAge
    };
}

module.exports.user_create = async (req, res) => {
    let user = req.body.user;

    // sjekk om bruker med samme mail eller brukernavn eksisterer
    const emailExistCheck = await User.findOne({ email: user.email });
    const usernameEXistCheck = await User.findOne({ username: user.username });

    if (emailExistCheck) {
        res.status(400).send({
            status: 'Brukeren ble ikke opprettet',
            err: 'Mailen du skrev inn er allerede i bruk'
        });
    } else if (usernameEXistCheck) {
        res.status(400).send({
            status: 'Brukeren ble ikke opprettet',
            err: 'Brukernavnet du skrev inn er allerede i bruk'
        });
    } else {
        // hash passord
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
    
        // lagre bruker
        const document = new User(user);
    
        try {
            document.save();
            res.status(200).send({
                status: 'Brukeren din er opprettet!'
            });
        } catch(err) {
            console.log('error');
            console.error(err);
            res.status(400).send({
                status: 'Brukeren din ble ikke opprettet',
                err
            });
        };
    }
};

module.exports.user_login = async (req, res) => {
    let user = req.body.user;

    console.log(user);

    // finn brukeren
    const dbUser = await User.findOne({ email: user.email });

    if (dbUser) {
        const auth = await bcrypt.compare(user.password, dbUser.password);

        if (auth) {
            const token = createToken(dbUser._id);

            res.cookie('jwt', token, {
                sameSite: 'strict',
                httpOnly: true,
                maxAge: maxAge * 1000
            });

            res.status(200).send({
                status: 'Du har logget inn!'
            });
        } else {
            res.status(400).send({
                status: 'Du er ikke logget inn',
                err: 'Feil passord'
            });
        };
    } else {
        res.status(400).send({
            status: 'Du er ikke logget inn',
            err: 'Fant ingen bruker med mailen du skrev'
        });
    };
};