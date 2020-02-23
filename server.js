var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
   res.sendFile("C:\\Users\\Mehdi\\Documents\\mehdi\\Projets Videos\\WIP\\Serie_Documentaire\\public\\index.html");
// res.send("C:\Users\Mehdi\Documents\mehdi\Projets Videos\WIP\Serie_Documentaire\index.html")
})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})