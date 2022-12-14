const utils = require("../utils/writer");
const HolderCredentials = require("../service/HolderCredentialsService");

module.exports.deleteCredential = function (req, res, next, id) {
  HolderCredentials.deleteCredential(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.deriveCredential = function (req, res, next, body) {
  HolderCredentials.deriveCredential(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getCredential = function (req, res, next, id) {
  HolderCredentials.getCredential(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getCredentials = function (req, res, next, type) {
  HolderCredentials.getCredentials(type)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
