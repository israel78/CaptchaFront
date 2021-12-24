const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const session = require('express-session')
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");