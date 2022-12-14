'use strict';

var utils = require('../utils/writer.js');
var VerifierCredentials = require('../service/VerifierCredentialsService');

module.exports.verifyCredential = function verifyCredential (req, res, next, body) {
  VerifierCredentials.verifyCredential(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
