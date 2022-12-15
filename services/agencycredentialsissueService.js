/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import { signCredential } from "../utils/signing.js";

class Issuer {
  controller = undefined;

  seed = undefined;

  createCredential() {
    throw new Error("Method 'createCredential()' must be implemented");
  }
}

/* Kadaster agency */
export class Kadaster extends Issuer {
  controller = "http://localhost:8080/keys/kadaster.json";

  // publicKeyMultibase has to be updated in kadaster.json if seed is changed
  seed = "kadaster";

  generateCredential(_body) {
    return {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1",
      ],
      id: "https://kadaster.nl/credentials/3732",
      type: ["VerifiableCredential", "UniversityDegreeCredential"],
      issuer: this.controller,
      issuanceDate: "2020-03-16T22:37:26.544Z",
      credentialSubject: {
        id: "did:example:123",
        degree: {
          type: "BachelorDegree",
          name: "Bachelor of Science and Arts",
        },
      },
    };
  }
}

/* BRP agency */
export class BRP extends Issuer {
  controller = "http://localhost:8080/keys/brp.json";

  // publicKeyMultibase has to be updated in brp.json if seed is changed
  seed = "brp";

  generateCredential(_body) {
    return {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1",
      ],
      id: "https://kadaster.nl/credentials/3732",
      type: ["VerifiableCredential", "AlumniCredential"],
      issuer: this.controller,
      issuanceDate: "2020-03-16T22:37:26.544Z",
      credentialSubject: {
        id: "did:example:123",
        alumniOf: {
          id: "did:example:c276e12ec21ebfeb1f712ebc6f1",
          name: "Example University",
        },
      },
    };
  }
}

/**
 * Issues a credential and returns it in the response body.
 *
 * body IssueCredentialRequest Parameters for issuing the credential. (optional)
 * agency String The government agency the user requires a VC from
 * returns IssueCredentialResponse
 * */
export async function issueCredential(issuer, body) {
  const examples = {};

  const credential = issuer.generateCredential(body);
  const verifiableCredential = await signCredential(issuer, credential);

  examples["application/json"] = {
    verifiableCredential,
  };

  return examples[Object.keys(examples)[0]];
}
