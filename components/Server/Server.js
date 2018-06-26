var express = require("express");
var app = express();
var http = require("http").Server(app);
var fs = require("fs");
var port = 8081;

//Set folder public source
// app.use(express.static("public"));
//Set ui for server

var server = app.listen(port, function(){
    var host = server.listen().address;
    var port = server.address().port;
    //Show console log in server console
    console.log("Server start at: http://%s:%s",host,port);
})
//Create Socket
const io = require("socket.io")(server);

io.on("connection", client=>{
    console.log("Client connected")
    //Handle client connect
})