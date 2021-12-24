const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const session = require('express-session')
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");