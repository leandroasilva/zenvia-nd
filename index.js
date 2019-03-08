const axios = require('axios');

module.exports = function(zenvia) {

    const http = axios.create({
        baseURL: 'https://api-rest.zenvia.com',
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json',
            'Authorization': "Basic " + new Buffer(zenvia.username + ":" + zenvia.password, "utf8").toString("base64"),
        }
    });

    return {
        sendSms: function(body) {
            return new Promise(function(resolve, reject) {
                http.post('/services/send-sms', body).then( (data) => {
                    resolve(data)
                }).catch( (error) => {
                    reject(error)
                });
            });
        }
    };
};