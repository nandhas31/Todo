var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var connection = require('../db/connect')

let Task = connection.Task

import  ('../db/connect.js')
const secret = 'sEcReT123'
router.get('/', function(req, res) {
    Task.find({text:"Hello"}, function(err,ret){
        if (err) res.send(err);
        res.status(200).send(ret);
    })

});

router.post('/', function(req, res) {
    let example = new Task({text:"Hello", completed:false, dueDate:new Date(), createdDate: new Date()})
    example.save(function (err) {
        if (err) return console.error(err);
        res.status(200).send('OK')

      })
});

module.exports = router;