# zenvia-nd
[![npm version](https://badge.fury.io/js/zenvia-nd.svg)](https://badge.fury.io/js/zenvia-nd)

Lightweight and ready to send SMS messages with the Zenvia API.
## Usage
Install the package:

`npm install zenvia-nd`

Example:

```
// Define Zenvia API credentials
var credentials = {
    username: "user.name",
    password: "abcdefghij"
};

// Require zenvia module
var zenvia = require('zenvia-nd')(credentials);

// Sending a single sms
zenvia.sendSms({
    "sendSmsRequest": {
        "to": "5585996791915",
        "msg": "Hello from API"
    }
}).then(function(data) {
    console.log(data); //Response
}).catch(function(err) {
    console.log("Error: " + err); //Error
});
```