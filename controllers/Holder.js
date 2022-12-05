'use strict';

var utils = require('../utils/writer.js');
var Holder = require('../service/HolderService');

module.exports.deriveCredential = function deriveCredential (req, res, next, body) {
  Holder.deriveCredential(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provePresentation = function provePresentation (req, res, next, body) {
  Holder.provePresentation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
