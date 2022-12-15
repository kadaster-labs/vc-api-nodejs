/**
 * Issues a credential and returns it in the response body.
 *
 * body IssueCredentialRequest Parameters for issuing the credential. (optional)
 * agency String The government agency the user requires a VC from
 * returns IssueCredentialResponse
 * */
export function issueCredential(_body, _agency) {
  return new Promise((resolve, _reject) => {
    const examples = {};

    const credential = {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1",
      ],
      id: "http://example.gov/credentials/3732",
      type: ["VerifiableCredential", "UniversityDegreeCredential"],
      issuer: "did:example:123",
      issuanceDate: "2020-03-16T22:37:26.544Z",
      credentialSubject: {
        id: "did:example:123",
        degree: {
          type: "BachelorDegree",
          name: "Bachelor of Science and Arts",
        },
      },
    };

    // const verifiableCredential = utils.signCredential(credential);

    examples["application/json"] = {
      verifiableCredential: credential,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
