'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
/**
* Main Schema
* @module api/main
*/
var MainSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Main', MainSchema);
