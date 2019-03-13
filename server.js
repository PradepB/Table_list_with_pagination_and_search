const express = require("express")
const bodyParser = require("body-parser")
var app = express()
var router = express.Router()
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const port = process.env.PORT || 8080

const morgan = require('morgan');
const Channel = require("./node/routes/Channel")(router)
const config = require("./config/database")
mongoose.connect(config.uri, {
    useCreateIndex: true, useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log("connection refused")
    } else {
        console.log("database connected")
    }
})

app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'));
app.use("/Channel", Channel)
app.use(express.static(__dirname + '/public'))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.com"))
})
app.listen(port, (err) => {
    console.log("port running in" + port)
})