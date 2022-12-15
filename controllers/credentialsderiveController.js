import * as service from "../services/credentialsderiveService.js";

export async function deriveCredential(_req, res) {
  const response = await service.deriveCredential();
  res.send(response);
}
