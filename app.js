"use strict";
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

mongoose.promise = global.Promise;

//mongoose.connect('mongodb://mamoyko:joelralph021787@ds139585.mlab.com:39585/noc88dblogs');

//mongodb://<dbuser>:<dbpassword>@ds139585.mlab.com:39585/noc88dblogs

mongoose.connect('mongodb://mamoyko:joelralph021787@ds139585.mlab.com:39585/noc88dblogs', (err) => {
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
