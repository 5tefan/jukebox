'use strict';

var express = require('express');
var controller = require('./main.controller');

var router = express.Router();

/**
* Main module
* @module api/main
*/ 

router.get('/', controller.index);

router.get('/join', controller.join_get);

router.post('/join', controller.join_post);

router.get('/host', controller.host_get);

router.post('/host', controller.host_post);

router.get('/p/:name', controller.party);

module.exports = router;
