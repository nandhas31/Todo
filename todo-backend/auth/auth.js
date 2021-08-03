var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var task = require('../db/connect')

import  ('../db/connect.js')
const secret = 'sEcReT123'
router.get('/', function(req, res) {
    task.Task.findOne({text:"Example"}, function(err,ret){
        console.log(ret + "hello");
    })
    res.send(jwt.sign({name:"Nandha"}, secret, {expiresIn:"1h"}));
});

router.post('/', function(req, res) {
    res.send('POST handler for /dogs route.');
});

module.exports = router;