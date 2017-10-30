"use strict";
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

mongoose.promise = global.Promise;

mongoose.connect('mongodb://localhost/noc-log', (err) => {
  if (err) {
    console.log('cannot connect to the database ' + err);
  } else {
    console.log('Connected to database')
  }
});

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var LogsRoutes = require('./routes/logs');

app.use('/api', LogsRoutes);

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), () => {
    console.log('server listening on port ' + app.get('port'));
});
