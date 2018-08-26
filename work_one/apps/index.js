var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('hi test');
app.id = require('./package.json').alexa.applicationId;

app.launch(function(req, res) {
  res.say("Hello World!!");
});


module.exports = app;