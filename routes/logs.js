"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
var logModel = require('../model/logs.js');

router.get('/', (req,res,next) => {
    res.json({success : 'welcome to Log api'});
});

router.get('/show_all', (req,res,next) => {
    logModel.find({})
      .exec()
      .then((results) => {
        res.json(results)
      })
      .catch((err) => {
        res.json(err)
      })
});

router.post('/add_logs', (req,res,next) => {
    var reference_id = req.body.reference_id,
        client_ip = req.body.client_ip,
        client_location = req.body.client_location,
        host_ip = req.body.host_ip,
        error_status = req.body.error_status,
        date = req.body.date;

    var newLogs = new logModel({
        reference_id : reference_id,
        client_ip : client_ip,
        client_location : client_location,
        host_ip : host_ip,
        error_status : error_status,
        date : date
    });

    newLogs.save((err,results) => {
        if (err) throw err;
        res.json({success : results});
    });
})

module.exports = router;
