'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/main', function() {
  it('should be an html document', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.should.be.html;
        done();
      });
  });
});
