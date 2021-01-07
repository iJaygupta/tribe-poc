

exports.verifyAccessToken = function (request, response, next) {
    let token = request.body.token;
    if (token === process.env.API_ACCESS_TOKEN) {
        next();
    } else {
        return response.status(401).send({ error: true, code: 'InvalidTokenError', message: 'Unauthorized Access.' })
    }
}