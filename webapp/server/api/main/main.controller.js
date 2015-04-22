'use strict';

var _ = require('lodash');
var Main = require('./main.model');

var mongoose = require('mongoose');
var Party = require('../party/party.model');

/**
* Main controller
* @module api/main/controller
*/

/** 
* GET render the index view
* @function index
*/
exports.index = function(req, res) {
    return res.render("index");
};

/**
* GET render the host view to create a new party
* @function host_get
*/
exports.host_get = function(req, res) {
	return res.render("host");
}

/**
* POST for the host view creating a party
* @function host_post
*/
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

/**
* GET render the join view for a guest to join an existing party
* @function join_get
*/
exports.join_get = function(req, res) {
	return res.render("join");
}

/** 
* POST for the join view to join a party
* @function join_post
*/
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

/**
* GET send the party.html file
* @function party
*/
exports.party = function(req, res) {
	return res.sendfile(req.app.get('appPath')+'/party.html');
}

function handleError(res, err) {
	return res.send(500, err);
}
