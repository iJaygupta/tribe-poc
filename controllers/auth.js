var jwt = require('jsonwebtoken');



exports.authLogin = (request, response) => {

    const userInfo = { // to be fetch from db after authentication
        email: request.body.userName,
        id: request.body.password,
        name: `Jay${request.body.password}`
    }

    const ssoToken = createToken(userInfo);

    const redirectURL = `https://kool-kanya.tribe.so/auth/sso?ssoToken=${ssoToken}&redirect=/answers`

    console.log("ssoToken", ssoToken);
    // response.redirect(redirectURL);
    response.status(200).json({
        status: "OK",
        ssoToken
    });
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
