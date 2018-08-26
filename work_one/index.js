var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.port || 3000;
var app = express();

var alexaApp = new alexa.app("test");

alexaApp.express({
  expressApp: app,

  // verifies requests come from amazon alexa. Must be enabled for production.
  // You can disable this if you're running a dev environment and want to POST
  // things to test behavior. enabled by default.
  checkCert: false,

  // sets up a GET route when set to true. This is handy for testing in
  // development, but not recommended for production. disabled by default
  debug: true
});

alexaApp.launch(function(request, response) {
  response.say("You launched the app!");
  response.send();
});

alexaApp.intent("HelloIntent",
  function(request, response) {
    response.say("Hello to you again!");
    response.send();
  }
);

app.listen(PORT);
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT);