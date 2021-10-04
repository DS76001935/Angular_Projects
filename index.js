const express = require("express")

const app = express()

app.get("/", function(req, res){
    console.log("/ request....");
})

app.get("/login", function(req, res) {
    console.log("/ login...");
    res.send({"msg":"Hello..."})
})

app.listen(3400,function() {
    console.log("Server created...");
})