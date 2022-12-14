'use strict';

var utils = require('../utils/writer.js');
var IssuerCredentials = require('../service/IssuerCredentialsService');

module.exports.issueCredential = function issueCredential (req, res, next, body, agency) {
  IssuerCredentials.issueCredential(body, agency)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCredentialStatus = function updateCredentialStatus (req, res, next, body) {
  IssuerCredentials.updateCredentialStatus(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
