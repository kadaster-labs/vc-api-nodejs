import * as service from "../services/presentationsverifyService.js";

export async function verifyPresentation(_req, res) {
  const response = await service.verifyPresentation();
  res.send(response);
}
