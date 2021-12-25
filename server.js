const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const sessions = require('express-session')
const cors = require('cors')
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: 'wow very secret',
    cookie: {
        maxAge: 600000,
        secure: true
    },
    saveUninitialized: false,
    resave: false,
    unset: 'destroy'
}));

app.use(cors({
    origin:['https:localhost:8080'],
    methods:['GET','POST'],
    credentials: true // enable set cookie
}));
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");