'use strict';

var utils = require('../utils/writer.js');
var HolderCredentials = require('../service/HolderCredentialsService');

module.exports.deleteCredential = function deleteCredential (req, res, next, id) {
  HolderCredentials.deleteCredential(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deriveCredential = function deriveCredential (req, res, next, body) {
  HolderCredentials.deriveCredential(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCredential = function getCredential (req, res, next, id) {
  HolderCredentials.getCredential(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCredentials = function getCredentials (req, res, next, type) {
  HolderCredentials.getCredentials(type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
