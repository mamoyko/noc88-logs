"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogSchema = mongoose.Schema({
    reference_id : {
      type : String,
    },
    client_ip : {
      type : String
    },
    client_location : {
      type : String
    },
    host_ip : {
      type : String
    },
    error_status : {
      type : String
    },
    date : {
      type : Date,
      default : () => {
        return Date.now();
      }
    }
});

var Logs = module.exports = mongoose.model('Logs', LogSchema);
