import * as service from "../services/presentationsService.js";

export async function getPresentations(_req, res) {
  const response = await service.getPresentations();
  res.send(response);
}
