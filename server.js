var express = require("express");
var path  =  require("path");
var app = express();
var htmlRoute = require("./app/routing/htmlRoutes.js")(app);
var apiRoute = require("./app/routing/apiRoutes.js")(app);

var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function(){
    console.log(`Server now listening on port: ${PORT}`);
})