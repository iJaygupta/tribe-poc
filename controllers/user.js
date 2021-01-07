


exports.updateUser = (request, response) => {
    console.log("updateUser triggered");
    console.log("request.body", request.body);

    response.status(200).json({
        status: "OK",
        data: {
            ...request.body
        }
    });

}

exports.updateUserPassword = (request, response) => {
    console.log("updateUserPassword triggered");
    console.log("request.body", request.body);

    response.status(200).json({
        status: "OK",
        data: {
            ...request.body
        }
    });

}
