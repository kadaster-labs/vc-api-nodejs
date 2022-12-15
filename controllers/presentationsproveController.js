import * as service from "../services/presentationsproveService.js";

export async function provePresentation(_req, res) {
  const response = await service.provePresentation();
  res.send(response);
}
