var express = require("express");
var path = require("path");
var friends = require("../data/friends");
var photos = require("../data/photos");
var fs = require("fs");
var app = express();
var mime = require('mime-types')




module.exports = function (app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.get("/api/photo/logo", function (req, res) {
        var img = fs.createReadStream("./app/img/logo.png");
        img.on('open', function () {
            res.set('Content-Type', 'image/png');
            img.pipe(res);
        });
        img.on('error', function () {
            res.set('Content-Type', 'text/plain');
            res.status(404).end('Not found');
        });

    });

    app.get("/api/main/css", function (req, res) {
        var css = fs.createReadStream("./app/css/style.css");
        css.on('open', function () {
            res.set('Content-Type', 'text/css');
            css.pipe(res);
        });
        css.on('error', function () {
            res.set('Content-Type', 'text/plain');
            res.status(404).end('Not found');
        });

    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(req.body);
        friends.friends.push(newFriend);

        res.json(newFriend);
    });
};