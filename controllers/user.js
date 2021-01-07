var jwt = require('jsonwebtoken');



exports.updateUser = (request, response) => {   

    console.log("request.body", request.body);
    console.log("request.query", request.query);

    response.status(200).json({
        status: "OK",
        data: {
            ...request.body
        }
    });

}
