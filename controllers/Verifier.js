'use strict';

var utils = require('../utils/writer.js');
var Verifier = require('../service/VerifierService');

module.exports.verifyCredential = function verifyCredential (req, res, next, body) {
  Verifier.verifyCredential(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verifyPresentation = function verifyPresentation (req, res, next, body) {
  Verifier.verifyPresentation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
