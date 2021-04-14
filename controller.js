const five = require("johnny-five");
const board = new five.Board();
const express = require("express");
const router = express.Router();

board.on('ready', () => {
  router.post("/", (req, res) => {
    let led = new five.Led(13)
    if(req.body.action === true) {
      led.on();
    } else {
      led.off();
    }
});

})

module.exports = router;
