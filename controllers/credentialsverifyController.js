import * as service from "../services/credentialsverifyService.js";

export async function verifyCredential(_req, res) {
  const response = await service.verifyCredential();
  res.send(response);
}
