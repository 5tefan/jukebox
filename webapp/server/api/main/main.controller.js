'use strict';

var _ = require('lodash');
var Main = require('./main.model');

// Get list of mains
exports.index = function(req, res) {
    return res.render("index");
};

// Get a single main
exports.show = function(req, res) {
  Main.findById(req.params.id, function (err, main) {
    if(err) { return handleError(res, err); }
    if(!main) { return res.send(404); }
    return res.json(main);
  });
};

// Creates a new main in the DB.
exports.create = function(req, res) {
  Main.create(req.body, function(err, main) {
    if(err) { return handleError(res, err); }
    return res.json(201, main);
  });
};

// Updates an existing main in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Main.findById(req.params.id, function (err, main) {
    if (err) { return handleError(res, err); }
    if(!main) { return res.send(404); }
    var updated = _.merge(main, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, main);
    });
  });
};

// Deletes a main from the DB.
exports.destroy = function(req, res) {
  Main.findById(req.params.id, function (err, main) {
    if(err) { return handleError(res, err); }
    if(!main) { return res.send(404); }
    main.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
