const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const five = require("johnny-five");
const board = new five.Board();
const schedule = require('node-schedule')
require('dotenv').config()

// const controller = require("./controller");

app.use(cors());

app.use(bodyParser.json());

app.post("/api/switch", function (req, res) {
  console.log(req.body.action)
  let led = new five.Led(13);
  const date = req.body.action;
  schedule.scheduleJob(date[0], () => {
    led.on()
  })
  schedule.scheduleJob(date[1], () => {
    led.off()
  })
});

app.use(express.static(path.join(__dirname, 'client/build')));

const PORT = process.env.PORT || 5000;

function startServer() {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}

board.on("ready", startServer);
