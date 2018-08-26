var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.port || 3000;
var app = express();

// ALWAYS setup the alexa app and attach it to express before anything else.
var alexaApp = new alexa.app("test");

alexaApp.express({
  expressApp: app,
  checkCert: false,
  debug: true
});

app.set("view engine", "ejs");

alexaApp.launch(function(request, response) {
  response.say('<emphasis level="strong">Hello!</emphasis> <break time="2ms"/> What do you desire?');
});

alexaApp.intent("HelloIntent", {},
  function(request, response) {
    response.say(
'Ola Beatriz' + 
'<break time="2ms"/>' + 'how are you?'
 );}
);

alexaApp.intent("HelloPhonemeIntent", {},
  function(request, response) {
    response.say(
'<phoneme alphabet="ipa" ph="ɔlə">Ola </phoneme><phoneme alphabet="ipa" ph="bɛətɹɪs">Beatriz </phoneme>' + 
'<break time="2ms"/>' + 'how are you?'
 );}
);


app.listen(PORT);
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT + "/test");