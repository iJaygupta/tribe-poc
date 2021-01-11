


exports.updateUser = (request, response) => {
    console.log("updateUser triggered");
    console.log("request.body", request.body);
    console.log("request.query", request.query);
    let params = request.body;
    let profile = params.actor.profile || {};
    if (params.event == `user.update` && params.actor.email) {
        let userData = {
            primaryEmail: params.actor.email,
            userName: profile.username,
            name: profile.name,
            avtar: profile.picture,
            knownAs: profile.title,
        };
        response.status(200).json({
            status: "OK",
            data: userData
        });
    } else {
        response.status(400).json({
            status: "OK",
            message: `Invalid Action`
        });
    }
}


exports.updateUserProfileImage = (request, response) => {
    console.log("updateUserProfileImage triggered");
    console.log("request.body", request.body);
    console.log("request.query", request.query);
    let params = request.body;
    let profile = params.actor.profile || {};
    if (params.event == `user.update` && params.actor.email) {
        let userData = {
            primaryEmail: params.actor.email,
            userName: profile.username,
            name: profile.name,
            avtar: profile.picture,
            knownAs: profile.title,
        };
        response.status(200).json({
            status: "OK",
            data: userData
        });
    } else {
        response.status(400).json({
            status: "OK",
            message: `Invalid Action`
        });
    }
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
