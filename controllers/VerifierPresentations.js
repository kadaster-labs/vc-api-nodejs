const utils = require("../utils/writer");
const VerifierPresentations = require("../service/VerifierPresentationsService");

module.exports.verifyPresentation = function (req, res, next, body) {
  VerifierPresentations.verifyPresentation(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
