const express = require("express")

const app = express()

//Use the lambda function name along with the '/' when performing GET/POST

app.get("/lambda-express", (req,res) => res.send("Hello world"));

module.exports = app