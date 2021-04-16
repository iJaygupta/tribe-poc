
const axios = require("axios");
const firebase = require("../lib/firebase-setup");



exports.getNotifiationSummary = async (request, response) => {
    try {
        let res = await getNotifiationSummaryFromTribe({ accessToken: request.headers.token });
        res = res.data;
        return response.status(200).json({
            status: "OK",
            count: res.length,
            data: res
        })
    } catch (error) {
        return response.status(500).json({
            status: "FAILED",
            error: error.response.data
        })
    }
}

exports.getNotifiations = async (request, response) => {
    try {
        let res = await getNotifiationFromTribe({ accessToken: request.headers.token });
        res = res.data;
        return response.status(200).json({
            status: "OK",
            count: res.length,
            data: res
        })
    } catch (error) {
        return response.status(500).json({
            status: "FAILED",
            error: error.response.data
        })
    }
}


const getNotifiationFromTribe = async (params) => {
    const { accessToken } = params;
    let data = await axios.get(`https://koolkanya-prod.tribe.so/api/v1/notifications`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    return data;
}

const getNotifiationSummaryFromTribe = async (params) => {
    const { accessToken } = params;
    let data = await axios.get(`https://koolkanya-prod.tribe.so/api/v1/notifications/summary`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
    return data;
}


exports.handlePostVoteNotification = async (request, response) => {
    try {
        let data = request.body;
        return response.status(200).json({
            status: "OK",
            data
        })
    } catch (error) {
        return response.status(500).json({
            status: "FAILED",
        })
    }
}


exports.sendNotificationFromFirebase = async (request, response) => {
    try {
        const registrationToken = process.env.CLIENT_REGISTRATION_TOKEN;
        var payload = {
            notification: {
                title: "Hello From Firebase",
                body: "Notification from some activity on tribe"
            }
        };
        const options = {
            priority: "high",
            timeToLive: 60 * 60 * 24
        }
        let result = await firebase.sendNotification(registrationToken, payload, options);
        return response.status(200).json({
            status: "OK",
            data: result
        })
    } catch (error) {
        return response.status(500).json({
            status: "FAILED",
            error
        })
    }
}