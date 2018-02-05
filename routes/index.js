const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let lcd = req.app.get('lcd');
    lcd.clear();
    if(req.body.message !== undefined)
        lcd.print(req.body.message);
    res.send({message: req.body.message})
});

module.exports = router;