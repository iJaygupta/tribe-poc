var admin = require("firebase-admin");

const firebaseAppCredential = {
    "type": process.env.FIREBASE_ACCOUNT_TYPE,
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY,
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_AUTH_URI,
    "token_uri": process.env.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_URL,
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_URL
}


admin.initializeApp({
    credential: admin.credential.cert(firebaseAppCredential),
    databaseURL: process.env.FIREBASE_DATABASE_URL
});


// var defaultAuth = admin.auth();
// var defaultDatabase = admin.database();


exports.sendNotification = function (registrationToken, msgBody, options) {
    return new Promise((resolve, reject) => {
        let output = {}
        admin.messaging().sendToDevice(registrationToken, msgBody, options)
            .then(data => {
                output.error = false;
                output.msg = "Notification Send Successfully";
                output.data = data;
                output.code = 2001;
                resolve(output);
            })
            .catch(error => {
                output.error = true;
                output.msg = "Unable to Send Notification";
                output.data = error;
                output.code = 9004;
                reject(output);
            })
    })
}