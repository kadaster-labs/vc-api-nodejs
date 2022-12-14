const utils = require("../utils/writer");
const IssuerCredentials = require("../service/IssuerCredentialsService");

module.exports.issueCredential = function (req, res, next, body, agency) {
  IssuerCredentials.issueCredential(body, agency)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.updateCredentialStatus = function (req, res, next, body) {
  IssuerCredentials.updateCredentialStatus(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
