import * as service from "../services/credentialsService.js";

export async function getCredentials(req, res) {
  const response = await service.getCredentials(req.query.type);
  res.send(response);
}
