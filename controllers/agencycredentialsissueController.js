import * as service from "../services/agencycredentialsissueService.js";

export async function issueCredential(req, res) {
  const response = await service.issueCredential(req.body, req.params.agency);
  res.send(response);
}
