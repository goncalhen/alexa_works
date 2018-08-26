var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.port || 3000;
var app = express();

var alexaApp = new alexa.app("test");

alexaApp.launch(function(request, response) {
  response.say("You launched the app!");
});

alexaApp.intent("HelloIntent",
  function(request, response) {
    response.say("Hello to you again!");
  }
);

app.listen(PORT);
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT);