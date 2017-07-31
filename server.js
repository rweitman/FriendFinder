var express = require("express");
var bodyParser = require("body-parser");


var app = express();

var friends = require("./app/data/friends.js");




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static("app/public/css"));



require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(bodyParser, app, friends);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log("listening on 3000");
});