'use strict';

var _ = require('lodash');
var Party = require('./party.model');

exports.playlist_get = function(req, res) {
  Party.findOne( {hash: req.body.hash }, function (err, party) {
    if(err) { return handleError(res, err); }
	//TODO: delete submitted by field from results
    return res.json(party.playlist);
  });
};

exports.playlist_add = function(req, res) {
	return res.json("coming soon");
}

exports.playlist_delete = function(req, res) {
	return res.json("coming soon");
}

/*
// Get list of partys
exports.index = function(req, res) {
  Party.find(function (err, partys) {
    if(err) { return handleError(res, err); }
    return res.json(200, partys);
  });
};

// Get a single party
exports.show = function(req, res) {
  Party.findById(req.params.id, function (err, party) {
    if(err) { return handleError(res, err); }
    if(!party) { return res.send(404); }
    return res.json(party);
  });
};

// Creates a new party in the DB.
exports.create = function(req, res) {
  Party.create(req.body, function(err, party) {
    if(err) { return handleError(res, err); }
    return res.json(201, party);
  });
};

// Updates an existing party in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Party.findById(req.params.id, function (err, party) {
    if (err) { return handleError(res, err); }
    if(!party) { return res.send(404); }
    var updated = _.merge(party, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, party);
    });
  });
};

// Deletes a party from the DB.
exports.destroy = function(req, res) {
  Party.findById(req.params.id, function (err, party) {
    if(err) { return handleError(res, err); }
    if(!party) { return res.send(404); }
    party.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
*/
