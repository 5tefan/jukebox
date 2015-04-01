'use strict';

var express = require('express');
var controller = require('./main.controller');

var router = express.Router();

//route for the home page
router.get('/', controller.index);

//join a party, get and post routes
router.get('/join', controller.join_get);
router.post('/join', controller.join_post);

//create a party, get and post routes
router.get('/host', controller.host_get);
router.post('/host', controller.host_post);

//the party view, angular app
router.get('/p/:name', controller.party);

module.exports = router;
