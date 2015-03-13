/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Party = require('./party.model');

exports.register = function(socket) {
  Party.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Party.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('party:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('party:remove', doc);
}