// initiates the server

var express = require("express");
var exphbs = require("express-handlebars");
var friendList = require('./app/data/friends.js')
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./app/public'))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./app/routing/apiRouting.js")(app);
require("./app/routing/htmlroute.js")(app);
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });





