/**
 * Issues a credential and returns it in the response body.
 * Issues a credential and returns it in the response body.
 *
 * body IssueCredentialRequest Parameters for issuing the credential. (optional)
 * agency String The government agency the user requires a VC from
 * returns IssueCredentialResponse
 * */
exports.issueCredential = function (_body, _agency) {
  return new Promise((resolve, _reject) => {
    const examples = {};
    examples["application/json"] = {
      verifiableCredential: {
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
        proof: {
          type: "Ed25519Signature2018",
          created: "2020-04-02T18:28:08Z",
          verificationMethod:
            "did:example:123#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
          proofPurpose: "assertionMethod",
          jws:
            // eslint-disable-next-line max-len
            "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYAu__6IH2FpSxv81w-l5PvE1og50tS9tH8WyXMlXyo45CA",
        },
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Updates the status of an issued credential
 * Updates the status of an issued credential.
 *
 * body UpdateCredentialStatus Params for updating the status of the issued credential. (optional)
 * no response value expected for this operation
 * */
exports.updateCredentialStatus = function (_body) {
  return new Promise((resolve, _reject) => {
    resolve();
  });
};
