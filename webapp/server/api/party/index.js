'use strict';

var express = require('express');
var controller = require('./party.controller');

var router = express.Router();

/* Controll the playlist for a party through these routes */
router.get('/:hash', controller.playlist_get);
router.post('/:hash/add', controller.playlist_add);
router.post('/:hash/delete', controller.playlist_delete);


/* these are the views that came with the scaffolding
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
*/



module.exports = router;
