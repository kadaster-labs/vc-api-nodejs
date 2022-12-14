'use strict';

var utils = require('../utils/writer.js');
var HolderPresentations = require('../service/HolderPresentationsService');

module.exports.deletePresentation = function deletePresentation (req, res, next, id) {
  HolderPresentations.deletePresentation(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPresentation = function getPresentation (req, res, next, id) {
  HolderPresentations.getPresentation(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPresentations = function getPresentations (req, res, next, type) {
  HolderPresentations.getPresentations(type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provePresentation = function provePresentation (req, res, next, body) {
  HolderPresentations.provePresentation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
