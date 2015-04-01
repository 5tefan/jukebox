'use strict';

var _ = require('lodash');
var Main = require('./main.model');

//render the home page
exports.index = function(req, res) {
    return res.render("index");
};

exports.join_get = function(req, res) {
	return res.send(200, "coming soon");
}

exports.join_post = function(req, res) {
	return res.send(200, "coming soon");
}

exports.host_get = function(req, res) {
	return res.send(200, "coming soon");
}

exports.host_post = function(req, res) {
	return res.send(200, "coming soon");
}

exports.party = function(req, res) {
	return res.sendfile(req.app.get('appPath')+'/party.html');
}

function handleError(res, err) {
  return res.send(500, err);
}
