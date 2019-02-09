var express = require("express");
var path = require("path");
var friends = require("../data/friends");
var app = express();



module.exports = function(app){
    app.use(express.urlencoded({ extended: true }));
app.use(express.json());
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });
    
    app.post("/api/friends", function(req,res){
        var newFriend = req.body;
        console.log(req.body);
        friends.friends.push(newFriend);
  
    res.json(newFriend);
    });
};