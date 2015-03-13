/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Main = require('./main.model');

exports.register = function(socket) {
  Main.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Main.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('main:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('main:remove', doc);
}