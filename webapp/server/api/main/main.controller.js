'use strict';

var _ = require('lodash');
var Main = require('./main.model');

var mongoose = require('mongoose');
var Party = require('../party/party.model');

//render the home page
exports.index = function(req, res) {
    return res.render("index");
};

exports.host_get = function(req, res) {
	return res.render("host");
}

exports.host_post = function(req, res) {
	console.log(req.body.name);
	var party_name = req.body.name.toLowerCase();
	Party.findOne( { name: party_name }, function(err, party) {
		if (party) { //party name already taken
			return res.render("host", {message: "Party identifier already in use"});
		} else { //make the party
			var insert = new Party({
				name: party_name
			});
			insert.save( function(err, party) {
				res.cookie('isdj', true);
				res.cookie('id', party._id);
				return res.redirect("/p/" + party.name);
			});
		}
	} );
}

exports.join_get = function(req, res) {
	return res.render("join");
}

exports.join_post = function(req, res) {
	console.log(req.body.name);
	var party_name = req.body.name.toLowerCase();
	Party.findOne( { name: party_name }, function(err, party) {
		if (party) { // party was found, user can join
			var id = new mongoose.Types.ObjectId;

			//update the database
			party.users.push({id: id});
			party.markModified('party.users');
			party.save( function(err, party) {
				res.cookie('isdj', false);
				res.cookie('id', id);
				return res.redirect("/p/" + party.name);
			});

		} else { //party not found
			return res.render("join", {message: "That party doesn't exist!"});
		}
	} );
}


exports.party = function(req, res) {
	return res.sendfile(req.app.get('appPath')+'/party.html');
}

function handleError(res, err) {
  return res.send(500, err);
}
