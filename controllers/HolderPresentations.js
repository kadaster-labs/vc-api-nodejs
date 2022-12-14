const utils = require("../utils/writer");
const HolderPresentations = require("../service/HolderPresentationsService");

module.exports.deletePresentation = function (req, res, next, id) {
  HolderPresentations.deletePresentation(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getPresentation = function (req, res, next, id) {
  HolderPresentations.getPresentation(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getPresentations = function (req, res, next, type) {
  HolderPresentations.getPresentations(type)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.provePresentation = function (req, res, next, body) {
  HolderPresentations.provePresentation(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
