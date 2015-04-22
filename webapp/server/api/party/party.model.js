'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId,
	moment = require('moment');

/**
* Party Schema
* @module api/party
*/

var PartySchema = new Schema({
	name: { type: String, required: true, unique: true},
	playlist: [ {
		song: {type: String},
		artist: {type: String},
		album: {type: String},
		submitted_by: {type: ObjectId},
		created_at: {type: Number, default: moment.utc().toDate().getTime()},
		state: {type: Number},
		votes: {type: Number}
	} ],
	history: [ {
		song: {type: String},
		artist: {type: String},
		album: {type: String},
		submitted_by: {type: ObjectId},
		created_at: {type: Number, default: moment.utc().toDate().getTime()},
		votes: {type: Number}
	} ],
	users: [ {
		id: {type: ObjectId},
	} ],
	info: {
		created: {type: Number, default: moment.utc().toDate().getTime()},
		modified: {type: Number, default: moment.utc().toDate().getTime()},
	}
});

module.exports = mongoose.model('Party', PartySchema);
