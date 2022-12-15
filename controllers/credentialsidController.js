import * as service from "../services/credentialsidService.js";

export async function getCredential(req, res) {
  const response = await service.getCredential(req.params.id);
  res.send(response);
}

export async function deleteCredential(req, res) {
  const response = await service.deleteCredential(req.params.id);
  res.send(response);
}
