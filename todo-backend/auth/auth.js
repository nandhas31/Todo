var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var task = require('../db/connect')

let Task = task.Task

import  ('../db/connect.js')
const secret = 'sEcReT123'
router.get('/', function(req, res) {
    Task.find({text:"Hello"}, function(err,ret){
        if (err) res.send(err);
        res.send(ret + "hello");
    })
    //res.send(jwt.sign({name:"Nandha"}, secret, {expiresIn:"1h"}));
});

router.post('/', function(req, res) {
    //res.send('POST handler for /dogs route.');
    let example = new task.Task({text:"Hello", completed:false, dueDate:new Date(), createdDate: new Date()})
    console.log(example)
    example.save(function (err) {
        if (err) return console.error(err);
        res.send("Saved")

      })
});
