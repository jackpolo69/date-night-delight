var express = require("express");

var app = express();
var port = process.env.PORT || 8080;
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json)
app.listen(port,function(){
    console.log ("app listening on port ",port)
})