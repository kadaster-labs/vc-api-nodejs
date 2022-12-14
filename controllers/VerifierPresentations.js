'use strict';

var utils = require('../utils/writer.js');
var VerifierPresentations = require('../service/VerifierPresentationsService');

module.exports.verifyPresentation = function verifyPresentation (req, res, next, body) {
  VerifierPresentations.verifyPresentation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
