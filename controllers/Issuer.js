'use strict';

var utils = require('../utils/writer.js');
var Issuer = require('../service/IssuerService');

module.exports.issueCredential = function issueCredential (req, res, next, body) {
  Issuer.issueCredential(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCredentialStatus = function updateCredentialStatus (req, res, next, body) {
  Issuer.updateCredentialStatus(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
