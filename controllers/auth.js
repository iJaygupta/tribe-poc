var jwt = require('jsonwebtoken');
const usersJSON = require('../users.json');



exports.authLogin = (request, response) => {

    if (usersJSON[request.body.userName]) {
        if (usersJSON[request.body.userName].password === request.body.password) {
            const userInfo = { // to be fetch from db after authentication
                email: request.body.userName,
                id: usersJSON[request.body.userName].sub,
                name: usersJSON[request.body.userName].name,
                picture: usersJSON[request.body.userName].picture
            }
            const ssoToken = createToken(userInfo);

            const redirectURL = `https://kool-kanya.tribe.so/auth/sso?ssoToken=${ssoToken}&redirect=/answers`

            response.status(200).json({
                status: "OK",
                message: "Successfully Logged In",
                ssoToken
            });
        } else {
            response.status(401).json({
                status: "Failed",
                message: "Invalid Credentials"
            });
        }
    } else {
        response.status(404).json({
            status: "Failed",
            message: "Hey, looks like you haven't not register. please register"
        });
    }
}

function createToken(user) {
    var privateKey = process.env.TRIBE_PRIVATE_KEY // '{Your Private Key}';
    var userData = {
        email: user.email,
        sub: user.id,
        name: user.name,
        iat: Math.round(new Date().getTime() / 1000), // token issue time
        exp: Math.round(new Date().getTime() / 1000) + 60, // token expiration time
        picture: user.picture, // optional but preferred
        locale: user.locale, // optional
        title: user.title, // optional
        bio: user.bio, // optional
        groups: [] // optional, more details under JWT Supported Keys
    };

    console.log("userData", userData)

    return jwt.sign(userData, privateKey, { algorithm: 'HS256' });
}
