// init express
let express = require('express');
let app = express();
// enable CORS
let cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

//static root index
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
});

app.get("/api/hello", (req, res) => {
    res.json({"data": "Hello World!"});
});

const funcTime = require('./function.js').convertDateAndUnixTime;
app.get("/api/:time", (req, res, next) => {
    console.log("req param time: "+req.params.time);
    next();
}, (req, res) => {
    let result = funcTime(req.params.time);
    res.json(result);
})

// Listen on port
let listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Listen on port: "+listener.address().port);
});