import { signCredential } from "../utils/signing.js";

/**
 * Issues a credential and returns it in the response body.
 *
 * body IssueCredentialRequest Parameters for issuing the credential. (optional)
 * agency String The government agency the user requires a VC from
 * returns IssueCredentialResponse
 * */
export async function issueCredential(_body, _agency) {
  const examples = {};

  const credential = {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1",
    ],
    id: "https://kadaster.nl/credentials/3732",
    type: ["VerifiableCredential", "UniversityDegreeCredential"],
    issuer: "http://localhost:3001/kadaster_publickey.json",
    issuanceDate: "2020-03-16T22:37:26.544Z",
    credentialSubject: {
      id: "did:example:123",
      degree: {
        type: "BachelorDegree",
        name: "Bachelor of Science and Arts",
      },
    },
  };

  const verifiableCredential = await signCredential(credential);

  examples["application/json"] = {
    verifiableCredential,
  };

  return examples[Object.keys(examples)[0]];
}
