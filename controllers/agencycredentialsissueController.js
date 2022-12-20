import * as service from "../services/agencycredentialsissueService.js";

export async function issueCredential(req, res) {
  let issuer;
  if (req.params.agency === "Kadaster") {
    issuer = new service.Kadaster();
  } else if (req.params.agency === "BRP") {
    issuer = new service.BRP();
  } else {
    res.status(500);
    res.send({
      message: "Unknown Issuer",
      error: {},
    });
  }

  try {
    const response = await service.issueCredential(issuer, req.body);
    res.status(201);
    res.send(response);
  } catch (error) {
    res.status(500);
    res.send({
      message: "Internal server error",
      error,
    });
  }
}
