'use strict';

var utils = require('../utils/writer.js');
var Credentials = require('../service/CredentialsService');

module.exports.issueCredential = function issueCredential (req, res, next, body) {
  Credentials.issueCredential(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCredentialStatus = function updateCredentialStatus (req, res, next, body) {
  Credentials.updateCredentialStatus(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
