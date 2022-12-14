const utils = require("../utils/writer");
const VerifierCredentials = require("../service/VerifierCredentialsService");

module.exports.verifyCredential = function (req, res, next, body) {
  VerifierCredentials.verifyCredential(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
