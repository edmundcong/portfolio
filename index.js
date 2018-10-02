const express = require("express");
const app = express();
const config = require("./config.js");

app.use(express.urlencoded({ extended: true })) // url encoded request payloads

app.get('/', (req, res) =>
    res.json({
        message: "Hello, please check out my github at: https://github.com/edmundcong"
    }));

app.all('*', (req, res) => res.json({message: "You should go to / on a GET. Anyway please check out my github at: https://github.com/edmundcong"}));

app.listen(config.port);
console.log(`listening on port: ${config.port}`);
