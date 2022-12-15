import * as service from "../services/credentialsstatusService.js";

export async function updateCredentialStatus(_req, res) {
  const response = await service.updateCredentialStatus();
  res.send(response);
}
