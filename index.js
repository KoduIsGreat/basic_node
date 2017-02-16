var express = require("express");
var app = express();
var BodyParser = require("body-parser");
var Maths = require("./maths");
var Diffuser = require("./diffusebomb");
app.use(express.static(__dirname + '/public'));

app.get("/something", function(req, res){
    res.send("hi from the something route");
})

app.get("/square/:num", function(req, res){
    var num = req.params.num;
    var squaredNumber = Maths.square(num);
    var numberString = new String(squaredNumber);
    res.send(numberString);

})
app.get("/sum/:num1/:num2", function(req, res){
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var summedNumber = Maths.sum(num1, num2);
    res.send("" + summedNumber);
})
app.get("/subtract/:num1/:num2", function(req, res){
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    var subtractedNumber = Maths.subtract(num1, num2);
    res.send("" + subtractedNumber);
})

app.get("/diffusebomb/:list",function(req,res){
    var list = req.params.list;
    Diffuser.diffuse(list.split(','));
})

var port = process.env.NODE_ENV === "testing" ? 9001 : 9000;
var server = app.listen(port, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("running on", port, host)
});

module.exports = app;
