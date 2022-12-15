import * as service from "../services/presentationsidService.js";

export async function getPresentation(req, res) {
  const response = await service.getPresentation(req.params.id);
  res.send(response);
}

export async function deletePresentation(req, res) {
  const response = await service.deletePresentation(req.params.id);
  res.send(response);
}
